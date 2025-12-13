document.addEventListener("DOMContentLoaded", async () => {

    // -------------------------------------------------
    // 1. VERIFICA AUTENTICAÇÃO
    // -------------------------------------------------
    const gestanteLogada = JSON.parse(localStorage.getItem("gestanteLogada"));

    if (!gestanteLogada || !gestanteLogada.cpf) {
        alert("Gestante não autenticada. Faça login novamente.");
        window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
        return;
    }

    const cpfLogado = gestanteLogada.cpf;

    // -------------------------------------------------
    // 2. ELEMENTOS DA TELA
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
    // 3. BUSCA DADOS REAIS NO BACKEND
    // -------------------------------------------------
    try {
        const response = await fetch(
            `http://localhost:3000/usuarios?cpf=${cpfLogado}`
        );

        const usuarios = await response.json();

        if (usuarios.length === 0) {
            alert("Gestante não encontrada no sistema.");
            window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
            return;
        }

        const gestante = usuarios[0];

        // -------------------------------------------------
        // 4. PREENCHE DADOS DA GESTANTE (REAIS)
        // -------------------------------------------------
        nomeInput.value = gestante.nome || "";
        socialInput.value = gestante.nome_social || "Não informado";
        emailInput.value = gestante.email || "";
        telInput.value = gestante.telefone || "";

        // -------------------------------------------------
        // 5. DADOS DE ATENDIMENTO (PODEM VIR DO BACKEND NO FUTURO)
        // -------------------------------------------------
        medicoSpan.textContent = "Médico(a) da Rede SUS";
        hospitalSpan.textContent = "Unidade Básica de Saúde - SUS";
        enderecoSpan.textContent = "Conforme regional da gestante";

        // -------------------------------------------------
        // 6. LINKS FUNCIONAIS
        // -------------------------------------------------
        linksDiv.innerHTML = "";

        const links = [
            {
                titulo: "Minhas Denúncias",
                link: "/codigo/gestante/denuncia/denuncia.html"
            },
            {
                titulo: "Meus Prontuários",
                link: "/codigo/gestante/prontuario/prontuario.html"
            }
        ];

        links.forEach(item => {
            const a = document.createElement("a");
            a.href = item.link;
            a.textContent = item.titulo;
            a.classList.add("info-link");
            linksDiv.appendChild(a);
        });

    } catch (error) {
        console.error("Erro ao carregar dados da gestante:", error);
        alert("Erro ao carregar seus dados. Tente novamente.");
    }

    // -------------------------------------------------
    // 7. MÁSCARA DE TELEFONE
    // -------------------------------------------------
    telInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        let masked = "";

        if (value.length > 0) masked += "(" + value.substring(0, 2);
        if (value.length > 2) masked += ") " + value.substring(2, 7);
        if (value.length > 7) masked += "-" + value.substring(7, 11);

        e.target.value = masked;
    });

});
