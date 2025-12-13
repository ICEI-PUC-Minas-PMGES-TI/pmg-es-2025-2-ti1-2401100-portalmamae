document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.getElementById("cpf");
    const senhaInput = document.getElementById("senha");
    const togglePassword = document.getElementById("togglePassword");
    const loginForm = document.getElementById("loginForm");

    // ===============================
    // FORMATAÇÃO DE CPF
    // ===============================
    cpfInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
        if (value.length > 6) value = value.replace(/(\d{3})(\d)/, "$1.$2");
        if (value.length > 9) value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        e.target.value = value;
    });

    // ===============================
    // MOSTRAR / OCULTAR SENHA
    // ===============================
    togglePassword.addEventListener("click", () => {
        const type = senhaInput.type === "password" ? "text" : "password";
        senhaInput.type = type;
    });

    // ===============================
    // LOGIN REAL (db.json)
    // ===============================
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const cpfFormatado = cpfInput.value;
        const senha = senhaInput.value;
        const cpfLimpo = cpfFormatado.replace(/\D/g, "");

        if (cpfLimpo.length !== 11 || !senha) {
            alert("Preencha CPF e senha corretamente.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3000/usuarios?cpf=${cpfFormatado}&senha=${senha}`
            );

            const usuarios = await response.json();

            if (usuarios.length === 0) {
                alert("❌ CPF ou senha inválidos.");
                return;
            }

            const usuario = usuarios[0];

            // 🔐 SALVA A GESTANTE LOGADA (PADRÃO ÚNICO)
            localStorage.setItem(
                "gestanteLogada",
                JSON.stringify({
                    id: usuario.id,
                    cpf: cpfLimpo,
                    nome: usuario.nome
                })
            );

            alert("✅ Login realizado com sucesso!");
            window.location.href = "/codigo/gestante/portalG/portalG.html";

        } catch (error) {
            console.error(error);
            alert("Erro ao realizar login.");
        }
    });
});
