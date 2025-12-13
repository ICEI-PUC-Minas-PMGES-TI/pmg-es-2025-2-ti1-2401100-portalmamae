document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Elementos da página
    // -------------------------------------------------------------
    const nomeInput = document.getElementById("nome");
    const socialInput = document.getElementById("social");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");

    const medicoSpan = document.getElementById("medico");
    const hospitalSpan = document.getElementById("hospital");
    const enderecoSpan = document.getElementById("endereco");
    const linksDiv = document.getElementById("links");

    // -------------------------------------------------------------
    // DADOS DE SIMULAÇÃO DINÂMICA
    // -------------------------------------------------------------

    const MEDICOS_APOIO = ["Dra. Helena Mendes", "Dr. Marcos Vinicius", "Dra. Juliana Ferreira", "Dr.(a) Alexandra Martins"];
    
    // Hospitais públicos/maternidades de BH (como solicitado)
    const HOSPITAIS_PARTO = [
        { nome: "Maternidade Odete Valadares", endereco: "R. do Rosário, 150 - Padre Eustáquio, BH, CEP: 30720-050" },
        { nome: "Hospital Sofia Feldman", endereco: "R. Antônio Bandeira, 1060 - Tupi, BH, CEP: 31840-360" },
        { nome: "Hospital das Clínicas da UFMG", endereco: "Av. Prof. Alfredo Balena, 110 - Santa Efigênia, BH, CEP: 30130-100" },
        { nome: "Hospital de BH", endereco: "Rua alguma coisa, 0000, BH, CEP: 00000-000" } // Incluindo o seu exemplo
    ];

    const LINKS_GESTANTE = [
        { "titulo": "Informações médicas e resultados de exames", "link": "#" },
        { "titulo": "Consultas e exames agendados", "link": "#" }
    ];

    const NOMES_COMUNS = [
        ["Maria", "Clara", "Silva"],
        ["Amanda", "Lopes", "Ferreira"],
        ["Janaina", "Soares", "Cunha"] // Incluindo seu exemplo para o hash ser consistente
    ];

    function generateGestanteData(cpf) {
        const hash = parseInt(cpf.replace(/\D/g, '').substring(0, 2) || '00') % NOMES_COMUNS.length;
        const [primeiroNome, segundoNome, sobrenome] = NOMES_COMUNS[hash];
        
        const nomeCompleto = `${primeiroNome} ${segundoNome} ${sobrenome}`;
        const nomeSocial = (nomeCompleto === "Janaina Soares Cunha") ? "Não possui" : primeiroNome; 
        
        const email = `${segundoNome.toLowerCase()}@gmail.com`;
        const telefone = `(31) 9${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 9000 + 1000)}`;
        
        const medico = MEDICOS_APOIO[hash % MEDICOS_APOIO.length];
        const hospitalData = HOSPITAIS_PARTO[hash % HOSPITAIS_PARTO.length];
        
        return {
            nome: nomeCompleto,
            social: nomeSocial,
            email: email,
            telefone: telefone,
            medico: medico,
            hospital: hospitalData.nome, 
            endereco: hospitalData.endereco
        };
    }

    // -------------------------------------------------------------
    // LÓGICA DE INICIALIZAÇÃO
    // -------------------------------------------------------------
    
    // 1. Resgata Dados do Local Storage
    const cpfLogado = localStorage.getItem('gestante_cpf_logada');
    // 🚀 NOVO: Resgata E-mail e Telefone salvos no cadastro
    const emailSalvo = localStorage.getItem('gestante_email_logada');
    const telefoneSalvo = localStorage.getItem('gestante_telefone_logada');

    if (!cpfLogado) {
        alert("Sessão expirada. Redirecionando para a Home.");
        window.location.href = '/codigo/home/home.html'; 
        return; 
    }

    // 2. Gera os Dados de Atendimento (Nome, Médico, Hospital, etc.)
    // Estes campos continuam sendo gerados/simulados, pois não vêm do cadastro.
    const gestanteDataSimulada = generateGestanteData(cpfLogado);

    // 3. Preenche os campos do formulário
    
    // Nome: Usa o nome simulado (que é consistente baseado no CPF)
    nomeInput.value = gestanteDataSimulada.nome;
    socialInput.value = gestanteDataSimulada.social;
    
    // 🚀 CORREÇÃO: E-mail e Telefone usam os valores salvos no cadastro (se existirem)
    emailInput.value = emailSalvo || gestanteDataSimulada.email;
    telInput.value = telefoneSalvo || gestanteDataSimulada.telefone;

    // Dados de Atendimento (continuam simulados)
    medicoSpan.textContent = gestanteDataSimulada.medico;
    hospitalSpan.textContent = gestanteDataSimulada.hospital;
    enderecoSpan.textContent = gestanteDataSimulada.endereco;
    
    // Links (mantido)
    linksDiv.innerHTML = ""; 
    LINKS_GESTANTE.forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.titulo;
        a.classList.add("info-link");
        linksDiv.appendChild(a);
    });

    // Opcional: Adicionar máscara de telefone (mantido)
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let maskedValue = '';

        if (value.length > 0) maskedValue += '(' + value.substring(0, 2);
        if (value.length > 2) maskedValue += ') ' + value.substring(2, 7);
        if (value.length > 7) maskedValue += '-' + value.substring(7, 11);
        
        e.target.value = maskedValue;
    });
});