document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const togglePassword = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');

    // 1. Formatação de CPF
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        
        // Aplica a máscara: 000.000.000-00
        if (value.length > 3) {
            value = value.substring(0, 3) + '.' + value.substring(3);
        }
        if (value.length > 7) {
            value = value.substring(0, 7) + '.' + value.substring(7);
        }
        if (value.length > 11) {
            value = value.substring(0, 11) + '-' + value.substring(11);
        }

        e.target.value = value;
    });

    // 2. Toggle Mostrar/Ocultar Senha
    togglePassword.addEventListener('click', () => {
        // Alterna entre 'password' e 'text'
        const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
        senhaInput.setAttribute('type', type);
        
        // Opcional: Mudar o ícone do olho se você tiver duas imagens (aberto/fechado)
        const eyeIcon = togglePassword.querySelector('.eye-icon');
        if (type === 'text') {
            // Se estiver como texto, você pode mudar o src da imagem aqui:
            // eyeIcon.src = 'eye-open-icon.png';
            eyeIcon.style.opacity = '1.0'; // Deixa o olho mais destacado
        } else {
            // eyeIcon.src = 'eye-closed-icon.png';
            eyeIcon.style.opacity = '0.7'; // Retorna ao estado normal
        }
    });

    // 3. Redirecionamento (Ao clicar em Entrar)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // ⚠️ Nota: Em um ambiente real, a autenticação ocorreria aqui (AJAX/Fetch)
        // e, se bem-sucedida, você salvaria as informações de login.

        alert('Login bem-sucedido! Redirecionando para a próxima página...');
        
        // Substitua 'proxima-pagina.html' pela URL real do portal logado
        window.location.href = '/codigo/home/home.html'; 
    });
});