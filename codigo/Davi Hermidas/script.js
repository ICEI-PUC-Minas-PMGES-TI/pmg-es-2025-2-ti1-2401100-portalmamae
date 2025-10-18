document.getElementById("formMamae").addEventListener("submit", function(event) {
    event.preventDefault();

    const uf = document.getElementById("uf").value;
    const cidade = document.getElementById("cidade").value;
    const bairro = document.getElementById("bairro").value;
    const servico = document.getElementById("servico").value;
    const especialidade = document.getElementById("especialidade").value;
    const acompanhamento = document.querySelector('input[name="acompanhamento"]:checked').value;

    const mensagem = `
        ✅ Dados enviados com sucesso!
        ----------------------------
        UF: ${uf}
        Cidade: ${cidade}
        Bairro: ${bairro}
        Tipo de serviço: ${servico}
        Especialidade: ${especialidade}
        Possui médico: ${acompanhamento}
    `;

    alert(mensagem);
    console.log(mensagem);

    // --- Gerar JSON a partir dos dados ---
    const dadosFormulario = {
        uf: uf,
        cidade: cidade,
        bairro: bairro,
        servico: servico,
        especialidade: especialidade,
        acompanhamento: acompanhamento
    };

    const jsonDados = JSON.stringify(dadosFormulario, null, 2);

    console.log("📦 JSON gerado:");
    console.log(jsonDados);

    // (Opcional) salvar no navegador
    // localStorage.setItem("dadosPortalMamae", jsonDados);

    document.getElementById("formMamae").reset();
});
