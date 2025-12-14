document.addEventListener("DOMContentLoaded", async () => {

    // -------------------------------------------------
    // 1. VERIFICA LOGIN
    // -------------------------------------------------
    const gestanteLogada = JSON.parse(localStorage.getItem("gestanteLogada"));

    if (!gestanteLogada || !gestanteLogada.cpf) {
        localStorage.removeItem("gestanteLogada");
        alert("Gestante não autenticada. Faça login.");
        window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
        return;
    }

    const cpfLogado = gestanteLogada.cpf;

    // -------------------------------------------------
    // 2. BUSCA GESTANTE REAL (ENDPOINT CORRETO)
    // -------------------------------------------------
    try {
        const response = await fetch(
            `http://localhost:3000/gestantes?cpf=${cpfLogado}`
        );

        const gestantes = await response.json();

        if (gestantes.length === 0) {
            localStorage.removeItem("gestanteLogada");
            alert("Sessão inválida. Faça login novamente.");
            window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
            return;
        }

        const gestante = gestantes[0];

        // -------------------------------------------------
        // 3. ELEMENTOS
        // -------------------------------------------------
        const nomeInput = document.getElementById("nome");
        const socialInput = document.getElementById("social");
        const emailInput = document.getElementById("email");
        const telInput = document.getElementById("tel");

        const medicoSpan = document.getElementById("medico");
        const hospitalSpan = document.getElementById("hospital");
        const enderecoSpan = document.getElementById("endereco");
        const linksDiv = document.getElementById("links");

        // -------------------------------------------------
        // 4. PREENCHE DADOS REAIS
        // -------------------------------------------------
        nomeInput.value = gestante.nome_completo || "";
        socialInput.value = "Não informado";
        emailInput.value = gestante.email || "";
        telInput.value = gestante.telefone || "";

        medicoSpan.textContent = "Médico(a) da Rede SUS";
        hospitalSpan.textContent = "Unidade Básica de Saúde - SUS";
        enderecoSpan.textContent = "Conforme regional da gestante";

        // -------------------------------------------------
        // 5. LINKS
        // -------------------------------------------------
        linksDiv.innerHTML = "";

        [
            { titulo: "Minhas Denúncias", link: "/codigo/gestante/denuncia/denuncia.html" },
            { titulo: "Meus Prontuários", link: "/codigo/gestante/prontuario/prontuario.html" },
            { titulo: "Meus Exames", link: "/codigo/Rafael/exames.html" }
        ].forEach(item => {
            const a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.titulo;
            a.classList.add("info-link");
            linksDiv.appendChild(a);
        });

    } catch (error) {
        console.error(error);
        alert("Erro ao carregar dados da gestante.");
    }
});
