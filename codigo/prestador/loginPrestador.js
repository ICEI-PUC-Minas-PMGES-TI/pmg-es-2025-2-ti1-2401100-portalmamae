document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const togglePassword = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');

    // ---------------- CPF MASK ----------------
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    });

    // ---------------- TOGGLE PASSWORD ----------------
    togglePassword.addEventListener('click', () => {
        const type = senhaInput.type === 'password' ? 'text' : 'password';
        senhaInput.type = type;
    });

    // ---------------- LOGIN ----------------
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const cpf = cpfInput.value;
        const senha = senhaInput.value;

        if (cpf.length !== 14) {
            alert('Digite um CPF válido.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/usuarios');
            const usuarios = await response.json();

            // Procura prestador pelo CPF
            const prestador = usuarios.find(u => u.cpf === cpf && u.admin === false);

            if (!prestador) {
                alert('CPF não cadastrado como prestador.');
                return;
            }

            if (prestador.senha !== senha) {
                alert('Senha incorreta.');
                return;
            }

            // ✅ Login OK → salva dados do prestador
            localStorage.setItem('prestador_logado', JSON.stringify(prestador));

            alert('Login realizado com sucesso!');
            window.location.href = '/codigo/prestador/PortalP/prestador.html';

        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com o servidor.');
        }
    });
});
