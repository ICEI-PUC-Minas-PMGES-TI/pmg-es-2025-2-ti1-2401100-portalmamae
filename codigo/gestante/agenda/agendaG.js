const calendarGrid = document.getElementById("calendarGrid");
const mesAno = document.getElementById("mesAno");
const listaAgendamentos = document.getElementById("listaAgendamentos");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let dataAtual = new Date();
let agendamentos = [];

async function carregarAgendamentos() {
  const res = await fetch("http://localhost:3000/gestantes");
  const gestantes = await res.json();

  // EXEMPLO: pega a primeira gestante
  agendamentos = gestantes[0].agendamentos || [];
}

function renderCalendar() {
  calendarGrid.innerHTML = "";

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  mesAno.textContent = dataAtual.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric"
  }).toUpperCase();

  const primeiroDia = new Date(ano, mes, 1).getDay();
  const totalDias = new Date(ano, mes + 1, 0).getDate();

  for (let i = 0; i < primeiroDia; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let dia = 1; dia <= totalDias; dia++) {
    const dayDiv = document.createElement("div");
    dayDiv.innerHTML = `<span class="day-number">${dia}</span>`;

    const dataStr = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

    const eventosDia = agendamentos.filter(a => a.data === dataStr);

    if (eventosDia.length > 0) {
      const dot = document.createElement("span");
      dot.classList.add("event-dot");
      dot.style.background =
        eventosDia[0].servico === "Consulta" ? "#e268be" : "#D3D3D3";
      dayDiv.appendChild(dot);
    }

    dayDiv.onclick = () => mostrarAgendaDia(dataStr);
    calendarGrid.appendChild(dayDiv);
  }
}

function mostrarAgendaDia(data) {
  listaAgendamentos.innerHTML = "";

  const eventos = agendamentos.filter(a => a.data === data);

  if (eventos.length === 0) {
    listaAgendamentos.innerHTML = "<p>Nenhum agendamento</p>";
    return;
  }

  eventos.forEach(ev => {
    const div = document.createElement("div");
    div.classList.add("appointment");
    div.innerHTML = `
      <h4>${ev.data} às ${ev.horario}</h4>
      <p><strong>${ev.servico}</strong></p>
      <p>${ev.localConsulta}</p>
      <p>${ev.cidade} - ${ev.uf}</p>
    `;
    listaAgendamentos.appendChild(div);
  });
}

prev.onclick = () => {
  dataAtual.setMonth(dataAtual.getMonth() - 1);
  renderCalendar();
};

next.onclick = () => {
  dataAtual.setMonth(dataAtual.getMonth() + 1);
  renderCalendar();
};

(async function init() {
  await carregarAgendamentos();
  renderCalendar();
})();
