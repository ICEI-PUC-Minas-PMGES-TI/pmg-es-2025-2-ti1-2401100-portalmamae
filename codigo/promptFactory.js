// ./promptFactory.js

function criarPromptParaExame(tipoExame, gestante) {
    const { nome_completo, idade, quadro_medico } = gestante;

    const infoMedica = `
      Quadro Médico:
      - Alergias: ${quadro_medico.alergia_a_medicamentos ? quadro_medico.alergia_detalhe : 'Nenhuma relatada'}
      - Diabetes: ${quadro_medico.possui_diabetes ? 'Sim' : 'Não'}
      - Outras Doenças: ${quadro_medico.possui_outras_doencas}
    `;

    let promptBase = `
    Aja como um sistema de laboratório.
    A paciente é ${nome_completo}, ${idade} anos, grávida.
    ${infoMedica}
    IMPORTANTE: Se a paciente tiver alergias, mencione-as nas observações do laudo.

    Gere dados fictícios para o exame de **${tipoExame}**.
    Retorne **APENAS** um objeto JSON contendo:
    * \`medicoResponsavel\` (um nome de médico fictício, com CRM)
    * \`clinica\` (um nome de clínica fictícia)
    * \`dataColeta\` (uma data aleatória nos últimos 5 dias (hoje é o dia 09/11/2025), formato DD-MM-AAAA)
    * \`observacoes\` (string opcional, com informações adicionais, ex: "Paciente relata alergia a Dipirona.")
    `;

    switch (tipoExame) {
        case "Hemograma Completo":
            return promptBase + `
            * \`indicacaoClinica\` ("Rotina pré-natal")
            * \`resultados\` (um array de objetos para Hemoglobina, Hematócrito, Plaquetas, Leucócitos. Cada um com \`metrica\`, \`valor\` (numérico), \`unidade\` e \`referencia\`).
            * \`conclusao\` (uma conclusão breve sobre o hemograma).
            `;
        case "Ultrassom Obstétrico":
            return promptBase + `
            * \`indicacaoClinica\` ("Avaliação de idade gestacional e bem-estar fetal")
            * \`parametros\` (um array de objetos para CCN, DBP, Fêmur, Batimentos Cardíacos. Cada um com \`descricao\`, \`valor\` e \`unidade\`).
            * \`conclusao\` (uma conclusão breve).
            `;
        case "Glicemia de Jejum":
            return promptBase + `
            * \`indicacaoClinica\` ("Rastreio de diabetes gestacional")
            * \`resultados\` (um array de objeto único para "Glicose". Deve ter \`metrica\`, \`valor\` (numérico), \`unidade\` ("mg/dL") e \`referencia\`).
            * \`conclusao\` (uma conclusão breve).
            `;
        case "Sorologia (Toxoplasmose)":
            return promptBase + `
            * \`indicacaoClinica\` ("Rastreio de infecções - TORCH")
            * \`resultados\` (um array de objetos para "Toxoplasmose IgG" e "Toxoplasmose IgM". Cada um com \`metrica\`, \`valor\`, \`unidade\` e \`referencia\`).
            * \`conclusao\` (uma conclusão breve).
            `;
        default:
             return promptBase + `
            * \`indicacaoClinica\` ("Exame de rotina")
            * \`resultados\` (um array de 2-3 objetos genéricos de resultado, cada um com \`metrica\`, \`valor\`, \`unidade\` e \`referencia\`).
            * \`conclusao\` (uma conclusão breve).
            `;
    }
}

module.exports = { criarPromptParaExame };