// ./pdfGenerator.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function gerarArquivoExamePDF(paciente, dadosExame, tipoExame) {
    let templateName = 'laudo_laboratorial.html'; // Padrão
    if (tipoExame === "Ultrassom Obstétrico") {
        templateName = 'laudo_ultrassom.html';
    }
    
    const templatePath = path.join(__dirname, 'templates', templateName);
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template não encontrado: ${templatePath}. Crie os templates HTML na pasta /templates.`);
    }
    let htmlContent = fs.readFileSync(templatePath, 'utf8');

    // Preenche dados do Paciente
    htmlContent = htmlContent.replace(new RegExp('{{nomePaciente}}', 'g'), paciente.nome_completo);
    htmlContent = htmlContent.replace(new RegExp('{{idadePaciente}}', 'g'), paciente.idade);

    // Preenche dados do Exame (IA)
    htmlContent = htmlContent.replace(new RegExp('{{tipoExame}}', 'g'), tipoExame);
    htmlContent = htmlContent.replace(new RegExp('{{dataColeta}}', 'g'), new Date(dadosExame.dataColeta).toLocaleDateString('pt-BR'));
    htmlContent = htmlContent.replace(new RegExp('{{medicoResponsavel}}', 'g'), dadosExame.medicoResponsavel);
    htmlContent = htmlContent.replace(new RegExp('{{clinica}}', 'g'), dadosExame.clinica);
    htmlContent = htmlContent.replace(new RegExp('{{indicacaoClinica}}', 'g'), dadosExame.indicacaoClinica || "N/A");
    htmlContent = htmlContent.replace(new RegExp('{{conclusao}}', 'g'), dadosExame.conclusao || "N/A");
    htmlContent = htmlContent.replace(new RegExp('{{observacoes}}', 'g'), dadosExame.observacoes || "Nenhuma.");

    // Gera tabelas de resultados
    if (dadosExame.resultados) {
        let resultadosHtml = dadosExame.resultados.map(p => `
            <tr>
                <td>${p.metrica}</td>
                <td>${p.valor} ${p.unidade || ''}</td>
                <td>${p.referencia}</td>
            </tr>
        `).join('');
        htmlContent = htmlContent.replace('{{resultadosTable}}', resultadosHtml);
    }
    if (dadosExame.parametros) {
         let parametrosHtml = dadosExame.parametros.map(p => `
            <tr>
                <td>${p.descricao}</td>
                <td>${p.valor} ${p.unidade}</td>
            </tr>
        `).join('');
        htmlContent = htmlContent.replace('{{parametrosTable}}', parametrosHtml);
    }

    // Geração do PDF
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // [NOVO] Limpa o nome do exame de caracteres ilegais (como /)
const tipoExameLimpo = tipoExame.replace(/\s/g, '_').replace(/[\/\\]/g, '-');
const fileName = `laudo_${tipoExameLimpo}_${paciente.id}_${Date.now()}.pdf`;

    const filePath = path.join(__dirname, 'laudos_gerados', fileName);

    await page.pdf({ path: filePath, format: 'A4', printBackground: true });
    await browser.close();
    
    console.log(`[PDF] Arquivo gerado em: ${filePath}`);
    return path.basename(fileName); // Retorna APENAS o nome do arquivo
}

module.exports = { gerarArquivoExamePDF };