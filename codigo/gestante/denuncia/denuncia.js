document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Funcionalidade de Formatação da Data (DD/MM/AAAA) CORRIGIDA ---
    const dataInput = document.getElementById('data');

    // Adiciona um listener para o evento de digitação (input)
    dataInput.addEventListener('input', function(e) {
        let value = e.target.value;
        
        // Remove todos os caracteres que não são dígitos
        let digits = value.replace(/\D/g, ""); 
        
        // Aplica o formato DD/MM/AAAA, inserindo as barras de forma segura
        let formattedValue = '';

        if (digits.length > 0) {
            // Pega os dois primeiros dígitos (DD)
            formattedValue += digits.substring(0, 2); 
        }

        if (digits.length >= 3) {
            // Insere a barra e pega os dois próximos dígitos (MM)
            formattedValue += '/' + digits.substring(2, 4); 
        }

        if (digits.length >= 5) {
            // Insere a barra e pega os quatro dígitos restantes (AAAA)
            // Limitamos a 8 dígitos no total (2+2+4)
            formattedValue += '/' + digits.substring(4, 8); 
        }

        // Se o valor formatado for diferente do valor atual, atualiza o input
        e.target.value = formattedValue;
    });

    // 2. Funcionalidade de Destacar o Radio Button Ativo (já embutido no CSS)
    // O CSS com `input[type="radio"]:checked + .custom-radio` já cuida da mudança de cor.
    // O JS abaixo é opcional, mas garante que o clique na label inteira funcione bem.
    
    const radioLabels = document.querySelectorAll('.radio-label');
    
    radioLabels.forEach(label => {
        label.addEventListener('click', function() {
            // Encontra o input radio dentro desta label
            const radioInput = this.querySelector('input[type="radio"]');
            
            // Se o input não estiver checado, checa ele (garantindo que o clique funcione)
            if (!radioInput.checked) {
                radioInput.checked = true;
                
                // Dispara o evento 'change' manualmente para garantir que o CSS seja aplicado
                // A maioria dos navegadores faria isso, mas é uma boa prática
                radioInput.dispatchEvent(new Event('change'));
            }
            
            // O CSS já faz o resto da mágica da bolinha verde!
        });
    });

    // Exemplo de como você poderia coletar os dados ao enviar (opcional)
    /*
    const complaintForm = document.getElementById('complaintForm');
    complaintForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        
        const local = dataInput.value;
        const data = dataInput.value;
        const anonima = document.querySelector('input[name="anonima"]:checked').value;
        const detalhes = document.getElementById('detalhes').value;

        console.log('Dados da Denúncia:', {
            local,
            data,
            anonima: anonima === 'sim' ? 'Sim' : 'Não',
            detalhes
        });

        // Aqui você enviaria os dados para o servidor (backend)
        alert('Denúncia enviada com sucesso! (Verifique o console para os dados)');
        this.reset(); // Limpa o formulário
    });
    */
});