document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("cpf");
    const form = document.getElementById("prontuario-form");
    const btnLimpar = document.getElementById("btn-limpar");
    const containerResultado = document.querySelector(".search-image-column");

    function formatarCPF(value) {
        let cpf = value.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
    }

    cpfInput.addEventListener("input", (e) => {
        e.target.value = formatarCPF(e.target.value);
    });

    btnLimpar.addEventListener("click", () => {
        cpfInput.value = "";
        containerResultado.innerHTML = `
            <img src="/codigo/imagens/iconeProntuario.png" alt="prontuario">
        `;
        cpfInput.focus();
    });

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const cpf = cpfInput.value.replace(/\D/g, "");

        if (cpf.length !== 11) {
            mostrarErro("❌ CPF inválido.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3000/prontuarios?cpf=${cpf}`
            );

            const dados = await response.json();

            if (dados.length === 0) {
                mostrarErro("❌ Não há prontuário para o CPF digitado.");
            } else {
                mostrarProntuario(dados[0]);
            }

        } catch (error) {
            console.error(error);
            mostrarErro("Erro ao buscar prontuário.");
        }
    });

    function mostrarErro(msg) {
        containerResultado.innerHTML = `
            <p style="color:red; font-weight:bold;">${msg}</p>
        `;
    }

    function mostrarProntuario(p) {
        containerResultado.innerHTML = `
            <div class="prontuario-card">
                <h3>Prontuário</h3>
                <p><strong>CPF:</strong> ${p.cpf}</p>
                <p><strong>Nome:</strong> ${p.nome}</p>
                <p><strong>Idade:</strong> ${p.idade}</p>
                <p><strong>Motivo:</strong> ${p.motivo}</p>
                <p><strong>História:</strong> ${p.historia}</p>
                <p><strong>Exames:</strong> ${p.exames}</p>
                <p><strong>Diagnóstico:</strong> ${p.diagnostico}</p>
                <p><strong>Data:</strong> ${new Date(p.dataRegistro).toLocaleDateString()}</p>
            </div>
        `;
    }
});
