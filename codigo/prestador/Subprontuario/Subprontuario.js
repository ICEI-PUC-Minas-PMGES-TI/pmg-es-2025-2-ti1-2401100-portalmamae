document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("prontuario-form");

    const requiredFields = [
        "cpf",
        "nome",
        "idade",
        "motivo",
        "historia",
        "exames",
        "diagnostico"
    ];

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        if (!validarFormulario()) {
            alert("⚠️ Preencha todos os campos obrigatórios.");
            return;
        }

        const prontuario = {
            cpf: document.getElementById("cpf").value.replace(/\D/g, ""),
            nome: document.getElementById("nome").value,
            idade: document.getElementById("idade").value,
            motivo: document.getElementById("motivo").value,
            historia: document.getElementById("historia").value,
            exames: document.getElementById("exames").value,
            diagnostico: document.getElementById("diagnostico").value,
            dataRegistro: new Date().toISOString()
        };

        await salvarProntuario(prontuario);
    });

    function validarFormulario() {
        let valido = true;

        requiredFields.forEach(id => {
            const field = document.getElementById(id);
            const parent = field.closest(".form-group");

            field.classList.remove("input-error");
            const erroAntigo = parent.querySelector(".error-message");
            if (erroAntigo) erroAntigo.remove();

            if (field.value.trim() === "") {
                field.classList.add("input-error");

                const erro = document.createElement("p");
                erro.className = "error-message";
                erro.textContent = "Este campo é obrigatório.";
                parent.appendChild(erro);

                valido = false;
            }
        });

        return valido;
    }

    async function salvarProntuario(dados) {
        try {
            const response = await fetch("http://localhost:3000/prontuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar prontuário");
            }

            alert("✅ Prontuário salvo com sucesso!");
            form.reset();

        } catch (error) {
            console.error(error);
            alert("❌ Erro ao salvar prontuário.");
        }
    }
});
