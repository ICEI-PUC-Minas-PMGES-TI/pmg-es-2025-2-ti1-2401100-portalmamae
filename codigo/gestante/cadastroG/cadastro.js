// Função para habilitar/desabilitar o campo de texto
function toggleInput(inputId, disable) {
    const inputField = document.getElementById(inputId);
    if (inputField) {
        inputField.disabled = disable;
        if (disable) {
            inputField.value = ''; // limpa o campo quando desabilitado
        } else {
            inputField.focus(); // coloca o foco no campo quando habilitado
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

    const radioContainers = document.querySelectorAll('.radio-container[data-target-input]');

    radioContainers.forEach(container => {
        const targetId = container.getAttribute('data-target-input');
        const radios = container.querySelectorAll('input[type="radio"]');
        const targetInput = document.getElementById(targetId);
        
        // --- Lógica de Inicialização ---
        // Desabilita o campo de texto por padrão, mas se o user marcar a opcao "sim", ativa
        const simRadio = container.querySelector('input[value="Sim"]');
        const naoRadio = container.querySelector('input[value="Não"]');

        if (naoRadio && naoRadio.checked) {
            targetInput.disabled = true;
        } else if (simRadio && simRadio.checked) {
            targetInput.disabled = false;
        } else {
            // Caso nenhum esteja marcado por padrão (boa prática desabilitar)
            targetInput.disabled = true;
        }
        
        // --- Lógica de Event Listener ---
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                const targetInputId = container.getAttribute('data-target-input');
                if (this.value === 'Sim') {
                    toggleInput(targetInputId, false); // Habilita o campo
                } else {
                    toggleInput(targetInputId, true); // Desabilita o campo
                }
            });
        });
    });

    // ====================================================================
    // CÓDIGO ATUALIZADO: Salva CPF, Email e Telefone, Valida Senha e Redireciona
    // ====================================================================
    const form = document.getElementById('cadastroForm');

    // Obter referências para os campos que vamos validar/salvar
    const cpfInput = document.getElementById('cpf');
    const senhaInput = document.getElementById('senha');
    const confirmaSenhaInput = document.getElementById('confirmaSenha');
    // 🚀 NOVO: Referências para Email e Telefone
    const emailInput = document.getElementById('email'); 
    const telInput = document.getElementById('tel');

    // Verifica se o formulário existe antes de adicionar o listener
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            // --- 1. Validação de Senha ---
            if (senhaInput && confirmaSenhaInput && senhaInput.value !== confirmaSenhaInput.value) {
                alert('Erro: A Senha e a Confirmação de Senha não coincidem. Por favor, verifique.');
                senhaInput.focus();
                return; // Impede o processo se a validação falhar
            }
            
            // --- 2. Validação básica de CPF e Salvamento ---
            if (cpfInput) {
                const cpfLimpo = cpfInput.value.replace(/\D/g, ''); 
                
                if (cpfLimpo.length < 11) {
                    alert('Erro: Por favor, preencha o campo CPF corretamente.');
                    cpfInput.focus();
                    return;
                }
                
                // --- Ação Crítica: Salvar CPF Logado ---
                localStorage.setItem('gestante_cpf_logada', cpfLimpo);
            } else {
                console.warn("Elemento CPF não encontrado. Continuando sem salvar sessão.");
            }

            // 🚀 NOVO: Salva Telefone e E-mail digitados no cadastro
            if (emailInput) {
                localStorage.setItem('gestante_email_logada', emailInput.value);
            }
            if (telInput) {
                localStorage.setItem('gestante_telefone_logada', telInput.value);
            }

            // 3. Feedback e Redirecionamento
            alert('Cadastro concluído com sucesso! Redirecionando para a área logada.');

            // Redireciona para a página de perfil da gestante, que carregará os dados
            window.location.href = '/codigo/gestante/portalG/portalG.html'; 
        });
    }
    // ====================================================================

});