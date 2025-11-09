// ./iaGenerator.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function gerarDadosComIA(prompt) {
    try {
        // ----- INICIALIZE A IA AQUI DENTRO -----
        // 1. A IA é "ligada" (sabemos que o dotenv do gerarExames.js já rodou)
        const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
        
        // 2. Use o nome do modelo que NÓS SABEMOS que funciona
        // (confirmado pelo seu teste 'verificarModelos.js')
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 

        // 3. A IA gera o conteúdo
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const textoIA = response.text();
        
        // 4. [A SOLUÇÃO] Limpa a resposta da IA
        console.log("[Debug IA] Resposta recebida da IA:", textoIA); // Log para vermos a resposta

        // Procura por ```json ... ```
        const jsonMatch = textoIA.match(/```json([\s\S]*?)```/); 

        if (jsonMatch && jsonMatch[1]) {
            // Sucesso! A regex achou o JSON dentro dos ```
            console.log("[Debug IA] JSON extraído da regex.");
            return JSON.parse(jsonMatch[1]);
        } else {
            // A regex falhou. Talvez a IA tenha retornado SÓ o JSON?
            try {
                // Tenta parsear o texto inteiro
                console.log("[Debug IA] Regex falhou, tentando parsear o texto inteiro.");
                return JSON.parse(textoIA);
            } catch (e) {
                // Falhou também. A resposta da IA não é um JSON.
                console.error("A IA respondeu, mas não consegui extrair o JSON. Resposta da IA:", textoIA);
                throw new Error("A resposta da IA não era um JSON válido.");
            }
        }

    } catch (error) {
        // Isso vai pegar erros da conexão ou o erro acima
        console.error("Erro detalhado dentro do gerarDadosComIA:", error); 
        throw new Error("Falha na API de IA.");
    }
}

module.exports = { gerarDadosComIA };