// ./iaGenerator.js

// ----- COLE SUA CHAVE DE API SECRETA AQUI -----
const MINHA_CHAVE_SECRETA = "AIzaSyCo4WOwjSokR5_12BbWM0D4iSDQzrR5avc";
// ---------------------------------------------

// Esta é a URL da API MODERNA (v1), e não a v1beta.
// Nós também estamos "embutindo" o modelo que queremos na URL.
const URL_API_V1 = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${MINHA_CHAVE_SECRETA}`;


async function gerarDadosComIA(prompt) {
    try {
        // 1. Prepara o "corpo" da mensagem no formato que o Google espera
        const bodyPayload = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        };

        // 2. Faz a ligação "manual" usando fetch (sem a biblioteca zumbi)
        const response = await fetch(URL_API_V1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyPayload)
        });

        // 3. Verifica se a ligação foi um sucesso
        if (!response.ok) {
            // Se o Google não gostou (ex: 404, 403, 400), ele vai falhar aqui
            const errorData = await response.json();
            console.error("Erro da API do Google (fetch):", errorData);
            throw new Error(`O Google respondeu com status: ${response.status}`);
        }

        // 4. Pega a resposta de IA
        const data = await response.json();
        
        // 5. Extrai o texto
        const textoIA = data.candidates[0].content.parts[0].text;
        
        // 6. Tenta converter o texto para JSON
        const jsonMatch = textoIA.match(/```json\n([\s\S]*?)\n```/);
        if (jsonMatch && jsonMatch[1]) {
            return JSON.parse(jsonMatch[1]);
        }
        return JSON.parse(textoIA);

    } catch (error) {
        console.error("Erro detalhado dentro do gerarDadosComIA (bypass):", error); 
        throw new Error("Falha na API de IA.");
    }
}

module.exports = { gerarDadosComIA };