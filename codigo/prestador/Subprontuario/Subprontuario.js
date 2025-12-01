document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prontuario-form');
    
    // Lista dos IDs dos campos que são obrigatórios para a validação
    // Todos os campos de texto serão considerados obrigatórios neste exemplo.
    const requiredFields = [
        'nome', 
        'idade', 
        'motivo', 
        'historia', 
        'exames', 
        'diagnostico'
    ];

    // Função para buscar e preencher os dados (mantida do código anterior)
    const preencherProntuario = async () => {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error(`Erro ao carregar dados: ${response.statusText}`);
            }
            const data = await response.json();
            const prontuario = data.prontuario;

            // Preenche os campos
            document.getElementById('nome').value = prontuario.nome || '';
            document.getElementById('idade').value = prontuario.idade || '';
            document.getElementById('motivo').value = prontuario.motivo || '';
            document.getElementById('historia').value = prontuario.historia || '';
            document.getElementById('exames').value = prontuario.exames || '';
            document.getElementById('diagnostico').value = prontuario.diagnostico || '';
            
        } catch (error) {
            console.error('Falha ao preencher o prontuário:', error);
            alert('Não foi possível carregar os dados do prontuário.');
        }
    };

    // -----------------------------------------------------------
    // NOVO: Função de Validação e Salvamento
    // -----------------------------------------------------------

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

        if (validarFormulario()) {
            // Se a validação for OK, simula o salvamento
            simularSalvamento();
        } else {
            // Se a validação falhar, a função já deu o feedback visual
            alert('Atenção: Por favor, preencha todos os campos obrigatórios.');
        }
    });

    function validarFormulario() {
        let formularioValido = true;

        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const value = field.value.trim();
            const parent = field.closest('.form-group');

            // Limpa mensagens e classes de erro anteriores
            field.classList.remove('input-error');
            const oldError = parent.querySelector('.error-message');
            if (oldError) oldError.remove();

            if (value === "") {
                // Campo vazio: Marca como inválido
                field.classList.add('input-error');
                
                // Adiciona mensagem de erro
                const errorMessage = document.createElement('p');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Este campo é obrigatório.';
                parent.appendChild(errorMessage);

                formularioValido = false;
            }
        });

        return formularioValido;
    }

    function simularSalvamento() {
        const dados = {};
        requiredFields.forEach(fieldId => {
            dados[fieldId] = document.getElementById(fieldId).value.trim();
        });

        console.log('Dados do Prontuário a serem salvos:', dados);
        alert('Prontuário salvo com sucesso! (Verifique o console para os dados)');
    }

    // Ação do link Agenda (mantida)
    const agendaLink = document.querySelector('.agenda-link');
    agendaLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecionando para a tela de Agenda...');
    });

    // Inicia o preenchimento dos dados ao carregar a página
    preencherProntuario();
});