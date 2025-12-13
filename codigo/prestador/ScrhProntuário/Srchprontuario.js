// Aguarda até que todo o conteúdo HTML da página seja carregado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleção de Elementos DOM
    const cpfInput = document.getElementById('cpf');
    const form = document.getElementById('prontuario-form');
    const btnLimpar = document.getElementById('btn-limpar');

    // 2. Função de Formatação do CPF
    // Esta função formata o valor do input enquanto o usuário digita
    function formatarCPF(value) {
        // Limpa todos os caracteres que não são números
        let cpf = value.replace(/\D/g, ''); 

        // Aplica a máscara: 000.000.000-00
        // (1) Adiciona um ponto após o 3º dígito
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
        // (2) Adiciona um ponto após o 6º dígito
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); 
        // (3) Adiciona um hífen após o 9º dígito
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 

        // Retorna o valor formatado, garantindo que não exceda 14 caracteres (incluindo pontos/hífen)
        return cpf;
    }

    // 3. Listener para Formatação Automática ao Digitar
    cpfInput.addEventListener('input', function(event) {
        // Aplica a função de formatação no valor atual do input
        event.target.value = formatarCPF(event.target.value);
    });

    // 4. Listener para o Botão "Limpar"
    btnLimpar.addEventListener('click', function() {
        // Limpa o valor do campo de input do CPF
        cpfInput.value = '';
        // Opcional: Coloca o foco de volta no campo
        cpfInput.focus();
    });

    // 5. Listener para o Envio do Formulário ("Buscar")
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
        event.preventDefault(); 

        // Obtém o valor do CPF (agora formatado)
        const cpfFormatado = cpfInput.value;

        // Limpa a formatação para obter apenas os 11 dígitos para a busca
        const cpfApenasDigitos = cpfFormatado.replace(/\D/g, ''); 

        // Verifica se o CPF tem 11 dígitos (validação simples)
        if (cpfApenasDigitos.length === 11) {
            console.log(`CPF Válido (para busca): ${cpfApenasDigitos}`);
            
            // SIMULAÇÃO DO REDIRECIONAMENTO
            // Em um ambiente de produção, aqui você faria uma chamada API para validar o CPF 
            // e então redirecionaria para a página de prontuários.
            const urlRedirecionamento = `prontuarios.html?cpf=${cpfApenasDigitos}`;
            
            // Exemplo de como redirecionar
            // window.location.href = urlRedirecionamento; 
            
            // Log para simular o redirecionamento sem sair da página
            console.log(`Redirecionando para: ${urlRedirecionamento}`);
            alert(`Buscando prontuário para o CPF: ${cpfFormatado}`);

        } else {
            // Caso o campo esteja incompleto
            alert('Por favor, digite um CPF válido com 11 dígitos.');
            cpfInput.focus();
        }
    });
});