// ./gerarExames.js

// Importações

//require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { criarPromptParaExame } = require('./promptFactory');
const { gerarDadosComIA } = require('./iaGenerator');
const { gerarArquivoExamePDF } = require('./pdfGenerator');

// ----- Configuração -----
const DB_PATH = path.join(__dirname, 'db', 'db.json'); // O caminho para o seu banco de dados
const EXAMES_POOL = [
    "Hemograma Completo",
    "Ultrassom Obstétrico",
    "Glicemia de Jejum",
    "Sorologia (Toxoplasmose)",
    "Tipo Sanguíneo (ABO/Rh)"
];
function gerarIdExame() { return "E" + Math.random().toString(10).substr(2, 6); }
function selecionarExamesAleatorios(pool, count) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


// ----- Funções de Leitura/Escrita Manual -----
function lerBancoSync() {
    console.log(`[DB] Lendo banco de dados em: ${DB_PATH}`);
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

function escreverBancoSync(dbData) {
    console.log(`[DB] Salvando alterações em: ${DB_PATH}`);
    fs.writeFileSync(DB_PATH, JSON.stringify(dbData, null, 2));
}


// ----- Função Principal (Main) -----
async function main() {
    try {
        // 1. Pega o ID do paciente da linha de comando
        const args = process.argv.slice(2);
        const idArg = args.find(arg => arg.startsWith('--gestanteId='));
        
        if (!idArg) {
            console.error("Erro: Forneça um ID de gestante. Ex: node gerarExames.js --gestanteId=G00012");
            return;
        }
        const gestanteId = idArg.split('=')[1]; // Ex: "G00012"

        // 2. Busca o paciente no BD (lendo o arquivo)
        const db = lerBancoSync();
        const paciente = db.gestantes.find(g => g.id === gestanteId);

        if (!paciente) {
            console.error(`Erro: Gestante com ID ${gestanteId} não encontrada no db.json.`);
            return;
        }
        console.log(`Iniciando geração de exames para: ${paciente.nome_completo}`);

        // 3. Selecionar 3 exames (que ela NÃO tem)
        const examesAtuais = paciente.resultado_exames.map(ex => ex.nome_exame);
        const examesDisponiveis = EXAMES_POOL.filter(ex => !examesAtuais.includes(ex) && ex !== "Ultrassonografia");
        const examesParaGerar = selecionarExamesAleatorios(examesDisponiveis, 3);

        if (examesParaGerar.length === 0) {
            console.log("Paciente já possui todos os exames do pool.");
            return;
        }
        console.log(`Exames selecionados: ${examesParaGerar.join(', ')}`);

        // 4. Loop de geração
        for (const tipoExame of examesParaGerar) {
            console.log(`--- Gerando ${tipoExame} ---`);
            
            const prompt = criarPromptParaExame(tipoExame, paciente);
            const dadosIA = await gerarDadosComIA(prompt);
            
            // Gerar o arquivo PDF (retorna só o nome, ex: "laudo.pdf")
            const nomeArquivo = await gerarArquivoExamePDF(paciente, dadosIA, tipoExame);
            
            // Criar o novo objeto de metadados
            const novoExame = {
                id_exame: gerarIdExame(),
                nome_exame: tipoExame,
                data_exame: dadosIA.dataColeta,
                status: "Finalizado",
                // IMPORTANTE: A URL deve ser a que o 'index.js' (json-server) vai servir
                arquivo_url: `http://localhost:3000/arquivos/${nomeArquivo}` 
            };
            
            // Adicionar ao array no objeto do paciente
            paciente.resultado_exames.push(novoExame);

        }
        
        // 5. Salvar o objeto *inteiro* do banco de volta no arquivo
        // (Nota: esta é uma forma simples de atualizar, encontra o índice e substitui)
        const pacienteIndex = db.gestantes.findIndex(g => g.id === gestanteId);
        db.gestantes[pacienteIndex] = paciente;
        escreverBancoSync(db);

        console.log("\nProcesso concluído! Novos exames adicionados ao 'db/db.json'.");
        console.log("Reinicie seu 'index.js' (json-server) se ele não atualizar sozinho.");

    } catch (error) {
        console.error("Erro fatal no processo principal:", error);
    }
}

main();