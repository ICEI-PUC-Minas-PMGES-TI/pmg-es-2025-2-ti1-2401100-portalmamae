document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("profileForm");
    const nomeInput = document.getElementById("nome");
    const registroInput = document.getElementById("registro");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const enderecoInput = document.getElementById("endereco");
    const btnEditar = document.getElementById("btnEditar");
    const btnSalvar = document.getElementById("btnSalvar");

    // -------------------------------------------------------------
    // FUNÇÕES DE GERAÇÃO DE DADOS SIMULADOS
    // -------------------------------------------------------------

    const CLINICAS_BH = [
        "Hospital Municipal Odilon Behrens, R. Formiga, 50 - São Cristóvão, Belo Horizonte - MG",
        "Hospital Metropolitano Odilon Behrens, R. Dr. Feio, 50 - São Cristóvão, Belo Horizonte - MG", // Exemplo de clinica publica de BH
        "UPA Centro-Sul, R. Domingos Vieira, 488 - Santa Efigênia, Belo Horizonte - MG",
        "Centro de Saúde Santa Efigênia, R. Santa Efigênia, 150 - Santa Efigênia, Belo Horizonte - MG"
    ];

    const NOMES_COMUNS = [
        ["Carla", "Diniz", "Rocha"],
        ["Junior", "Santos", "Oliveira"],
        ["Ana", "Beatriz", "Silva"],
        ["Eduard", "Jaime", "Ambrosio"],
        ["Luciana", "Freitas", "Souza"]
    ];

    function generateRandomData(cpf) {
        // Usa o CPF como uma "chave" para selecionar dados consistentes
        const hashIndex = parseInt(cpf.replace(/\D/g, '').substring(0, 2)) % NOMES_COMUNS.length;
        const [primeiroNome, segundoNome, sobrenome] = NOMES_COMUNS[hashIndex];
        
        // Simula número de registro baseado no CPF
        const numRegistro = cpf.replace(/\D/g, '').substring(0, 15);
        
        // Telefone com DDD (31) e números aleatórios
        const telefone = `(31) 9${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 9000 + 1000)}`;

        // Endereço (sempre uma clínica/hospital de BH)
        const endereco = CLINICAS_BH[hashIndex % CLINICAS_BH.length]; 
        
        // Email: primeiroNome + segundoNome + @gmail.com
        const email = `${primeiroNome.toLowerCase()}${segundoNome.toLowerCase()}@gmail.com`;

        return {
            nome_prestador: `${primeiroNome} ${segundoNome} ${sobrenome}`,
            num_registro: numRegistro,
            email: email,
            telefone: telefone,
            endereco_atendimento: endereco
        };
    }

    // -------------------------------------------------------------
    // FUNÇÕES DA INTERFACE (MANTIDAS)
    // -------------------------------------------------------------

    function toggleEditMode(isEditing) {
        if (isEditing) {
            emailInput.readOnly = false;
            telefoneInput.readOnly = false;
            enderecoInput.readOnly = false;

            btnEditar.style.display = 'none';
            btnSalvar.style.display = 'block';
        } else {
            emailInput.readOnly = true;
            telefoneInput.readOnly = true;
            enderecoInput.readOnly = true;

            btnEditar.style.display = 'block';
            btnSalvar.style.display = 'none';
        }
    }
    
    // Função de Salvar Alterações (Simulada, não armazena no JSON real)
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // ⚠️ Em uma aplicação real, aqui você enviaria os dados atualizados para o servidor.
        alert("Dados atualizados com sucesso! (Salvos localmente na simulação)");
        
        // Volta para o modo de visualização
        toggleEditMode(false);
    }
    
    // -------------------------------------------------------------
    // LÓGICA DE INICIALIZAÇÃO
    // -------------------------------------------------------------

    // 🚀 AÇÃO CRÍTICA: Resgata o CPF do Local Storage
    const cpfLogado = localStorage.getItem('prestador_cpf_logado');

    if (!cpfLogado) {
        // Se não houver CPF salvo, redireciona para o login
        alert("Sessão expirada ou não logada. Retorne ao login.");
        window.location.href = 'login.html'; // Redireciona para o arquivo de login
        return; 
    }

    // 1. Gera os dados fictícios usando o CPF
    const prestadorData = generateRandomData(cpfLogado);

    // 2. Preenche os campos do formulário
    nomeInput.value = prestadorData.nome_prestador;
    registroInput.value = prestadorData.num_registro;
    emailInput.value = prestadorData.email;
    telefoneInput.value = prestadorData.telefone;
    enderecoInput.value = prestadorData.endereco_atendimento;

    // 3. Inicializa os botões
    toggleEditMode(false);

    // Event Listeners
    btnEditar.addEventListener('click', () => {
        toggleEditMode(true);
    });

    form.addEventListener("submit", handleFormSubmit);
    
    // Opcional: Adiciona máscara de telefone (ex: (31) 99999-9999)
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let maskedValue = '';

        if (value.length > 0) {
            maskedValue += '(' + value.substring(0, 2);
        }
        if (value.length > 2) {
            maskedValue += ') ' + value.substring(2, 7);
        }
        if (value.length > 7) {
            maskedValue += '-' + value.substring(7, 11);
        }

        e.target.value = maskedValue;
    });
});