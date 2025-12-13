document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const togglePassword = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');

    // 1. Formatação de CPF (mantida)
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        
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

    // 2. Toggle Mostrar/Ocultar Senha (mantida)
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            senhaInput.setAttribute('type', type);
            
            const eyeIcon = togglePassword.querySelector('.eye-icon');
            eyeIcon.style.opacity = type === 'text' ? '1.0' : '0.7';
        });
    }

    // 3. Redirecionamento e Salvamento de CPF
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const cpf = cpfInput.value;

        if (cpf.length === 14) { // Verifica se o CPF está completo
            // 🚀 AÇÃO CRÍTICA: Salva o CPF no Local Storage para ser lido na próxima página
            localStorage.setItem('prestador_cpf_logado', cpf);
            
            alert('Login bem-sucedido! Redirecionando para a área do Prestador...');
            
            // ATENÇÃO: Use o nome correto do arquivo (provavelmente 'prestador.html')
            window.location.href = '/codigo/prestador/PortalP/prestador.html'; 
            
        } else {
            alert('Por favor, digite um CPF completo.');
        }
    });
});