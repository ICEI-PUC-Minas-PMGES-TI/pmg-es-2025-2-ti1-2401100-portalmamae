const getHojeISO = () => {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
};

const hojeISO = getHojeISO();

let agendamentos = [
    { 
        id: 1, 
        paciente: 'Paciente Exemplo (Hoje)', 
        data: hojeISO, 
        hora: '10:00', 
        tipo: 'consulta', 
        local: 'Consultório Principal' 
    },

    { 
        id: 2, 
        paciente: 'João Santos', 
        data: '2025-12-25', 
        hora: '14:00', 
        tipo: 'procedimento', 
        local: 'UBS Norte' 
    }
];

// Estado da Aplicação
let dataAtual = new Date(); 
let dataSelecionada = hojeISO;

window.onload = () => {
    // Preenche o input de data com o dia de hoje
    document.getElementById('inputData').value = hojeISO;
    atualizarTela();
};

// --- FUNÇÃO CENTRAL DE ATUALIZAÇÃO ---
function atualizarTela() {
    renderizarCalendario();
    renderizarListaLateral();
}

// --- RENDERIZAR CALENDÁRIO ---
function renderizarCalendario() {
    const grid = document.getElementById('calendarGrid');
    const displayMes = document.getElementById('mesAnoDisplay');
    
    grid.innerHTML = ""; 

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    const nomeMes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(dataAtual);
    displayMes.innerText = `${nomeMes.toUpperCase()} DE ${ano}`;

    const primeiroDiaSemana = new Date(ano, mes, 1).getDay(); 
    const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate(); 

    
    for (let i = 0; i < primeiroDiaSemana; i++) {
        const div = document.createElement('div');
        div.className = 'day-cell other-month';
        grid.appendChild(div);
    }

    const dataRealHoje = new Date();
    
    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
        const div = document.createElement('div');
        div.className = 'day-cell';
        
        const dataString = `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        
        div.innerHTML = `<span>${dia}</span>`;

        if (dia === dataRealHoje.getDate() && mes === dataRealHoje.getMonth() && ano === dataRealHoje.getFullYear()) {
            div.classList.add('today-real');
        }

        if (dataSelecionada === dataString) {
            div.classList.add('selected');
        }

        const eventosDoDia = agendamentos.filter(a => a.data === dataString);
        if (eventosDoDia.length > 0) {
            const containerBolinhas = document.createElement('div');
            containerBolinhas.className = 'day-dots-container';
            
            eventosDoDia.forEach(ev => {
                const bolinha = document.createElement('div');
                bolinha.className = `mini-dot ${ev.tipo}`; 
                containerBolinhas.appendChild(bolinha);
            });
            div.appendChild(containerBolinhas);
        }

        div.onclick = () => selecionarDia(dataString);

        grid.appendChild(div);
    }
}

function renderizarListaLateral() {
    const listaEl = document.getElementById('listaAgendamentos');
    const tituloEl = document.getElementById('tituloLista');
    listaEl.innerHTML = "";

    let listaFiltrada = [];

    if (dataSelecionada) {
        const partes = dataSelecionada.split('-');
        const dataBR = `${partes[2]}/${partes[1]}/${partes[0]}`;
        
        tituloEl.innerText = `Agenda do Dia: ${dataBR}`;
        listaFiltrada = agendamentos.filter(a => a.data === dataSelecionada);
    } else {
        tituloEl.innerText = "Todos os Agendamentos do Mês";
        listaFiltrada = agendamentos.filter(a => {
            const d = new Date(a.data + 'T00:00:00');
            return d.getMonth() === dataAtual.getMonth() && d.getFullYear() === dataAtual.getFullYear();
        });
    }

    listaFiltrada.sort((a, b) => a.hora.localeCompare(b.hora));

    if (listaFiltrada.length === 0) {
        listaEl.innerHTML = `
            <div style="text-align:center; padding: 20px; color:#666;">
                Nenhum agendamento para este dia.<br>
                <small>Utilize o formulário acima para adicionar.</small>
            </div>`;
        return;
    }

    listaFiltrada.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card';
        const p = ev.data.split('-');
        const dataBR = `${p[2]}/${p[1]}/${p[0]}`;

        card.innerHTML = `
            <div class="event-header">
                ${dataBR} às ${ev.hora} - ${ev.paciente}
            </div>
            <div class="event-details">
                <strong>${ev.tipo.toUpperCase()}</strong><br>
                ${ev.local}<br>
                Cep: 00000-000
            </div>
        `;
        listaEl.appendChild(card);
    });
}

function selecionarDia(dataString) {
    if (dataSelecionada === dataString) {
        dataSelecionada = null; 
    } else {
        dataSelecionada = dataString;
        document.getElementById('inputData').value = dataString;
    }
    atualizarTela();
}

function mudarMes(delta) {
    dataAtual.setMonth(dataAtual.getMonth() + delta);
    dataSelecionada = null; 
    atualizarTela();
}

function salvarAgendamento() {
    const nome = document.getElementById('inputNome').value;
    const data = document.getElementById('inputData').value;
    const hora = document.getElementById('inputHora').value;
    const tipo = document.getElementById('inputTipo').value;
    const local = document.getElementById('inputLocal').value || "Consultório Padrão";

    if (!nome || !data || !hora) {
        alert("Preencha Nome, Data e Hora.");
        return;
    }

    agendamentos.push({
        id: Date.now(),
        paciente: nome,
        data: data,
        hora: hora,
        tipo: tipo,
        local: local
    });

    document.getElementById('inputNome').value = "";
    document.getElementById('inputHora').value = "";
    
    
    dataSelecionada = data;
    
    const dataAgendada = new Date(data + 'T00:00:00');
    if (dataAgendada.getMonth() !== dataAtual.getMonth()) {
        dataAtual = dataAgendada;
    }

    atualizarTela();
    alert("Agendado com sucesso!");
}