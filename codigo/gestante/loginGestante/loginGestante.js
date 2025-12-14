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
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = value;
    });

    // ===============================
    // MOSTRAR / OCULTAR SENHA
    // ===============================
    togglePassword.addEventListener("click", () => {
        senhaInput.type =
            senhaInput.type === "password" ? "text" : "password";
    });

    // ===============================
    // LOGIN REAL DA GESTANTE
    // ===============================
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const cpf = cpfInput.value;
        const senha = senhaInput.value;

        if (cpf.length !== 14 || !senha) {
            alert("Preencha CPF e senha corretamente.");
            return;
        }

        try {
            // 🔥 BUSCA SOMENTE POR CPF
            const response = await fetch(
                `http://localhost:3000/gestantes?cpf=${cpf}`
            );

            const gestantes = await response.json();

            if (gestantes.length === 0) {
                alert("Gestante não encontrada.");
                return;
            }

            const gestante = gestantes[0];

            // 🔐 VALIDA SENHA
            if (gestante.senha !== senha) {
                alert("Senha incorreta.");
                return;
            }

            // ✅ SALVA SESSÃO LIMPA
            localStorage.setItem(
                "gestanteLogada",
                JSON.stringify({
                    id: gestante.id,
                    cpf: gestante.cpf,
                    nome: gestante.nome_completo,
                    email: gestante.email
                })
            );

            alert("Login realizado com sucesso!");
            window.location.href =
                "/codigo/gestante/portalG/portalG.html";

        } catch (error) {
            console.error(error);
            alert("Erro ao realizar login.");
        }
    });
});
