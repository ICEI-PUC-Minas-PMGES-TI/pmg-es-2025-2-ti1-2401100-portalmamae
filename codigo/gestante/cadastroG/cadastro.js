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
        
        // --- Lógica de Event Listener (aq "Event Listener" é oq um mecanismo que espera que um determinado evento ocorra em um elemento específico da página, no caso o botão seja habilitado) ---
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
});