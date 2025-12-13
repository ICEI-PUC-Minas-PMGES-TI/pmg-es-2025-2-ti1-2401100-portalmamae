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

    document.addEventListener('DOMContentLoaded', function() {
    // ... (Código de formatação de data e radio buttons aqui) ...

    const complaintForm = document.getElementById('complaintForm');

    // Listener para quando o botão 'Enviar Denúncia' for clicado
    complaintForm.addEventListener('submit', function(e) {
        
        // 1. IMPEDE o envio padrão do formulário (evita recarregar a página)
        e.preventDefault(); 
        
        // 2. COLETAR os dados
        const local = document.getElementById('local').value;
        const data = document.getElementById('data').value;
        const anonima = document.querySelector('input[name="anonima"]:checked').value;
        const detalhes = document.getElementById('detalhes').value;
        
        // 3. VALIDAÇÃO SIMPLES (Exemplo: verifica se os campos principais estão vazios)
        if (!local || !data || !detalhes) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; // Interrompe o processo se a validação falhar
        }

        const denunciaData = {
            local,
            data,
            anonima: anonima === 'sim', // Salva como booleano (true/false)
            detalhes
        };

        console.log('Dados prontos para envio:', denunciaData);

        // 4. ENVIAR os dados para o servidor (Backend)
        // **ATENÇÃO:** Você precisa mudar o URL abaixo para o endereço do seu servidor!
        /*
        fetch('/api/denuncias/enviar', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(denunciaData),
        })
        .then(response => response.json())
        .then(data => {
            // 5. DAR FEEDBACK
            alert('Denúncia enviada com sucesso! Obrigado pelo seu relato.');
            complaintForm.reset(); // Limpa o formulário após o sucesso
        })
        .catch((error) => {
            console.error('Erro ao enviar a denúncia:', error);
            alert('Ocorreu um erro ao enviar a denúncia. Tente novamente mais tarde.');
        });
        */

        // Por enquanto, sem o backend, vamos apenas simular o sucesso
        alert('Denúncia enviada com sucesso! (Dados no console.log)');
        complaintForm.reset();
    });

    // ... (Seu código de formatação de data deve vir aqui, no início do DOMContentLoaded) ...
    // ...
});
});