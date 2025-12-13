// Pega o agendamento enviado pela página anterior
const dados = localStorage.getItem("agendamentoAtual");

if (dados) {
  const obj = JSON.parse(dados);
  console.log("✅ Último agendamento recebido:", obj);
}

// Pega todos os agendamentos feitos até hoje
const historico = JSON.parse(localStorage.getItem("historicoAgendamentos")) || [];

console.log("📌 Histórico completo:");
historico.forEach((item, index) => {
  console.log(`Registro ${index + 1}:`, item);
});

// ---------------------------
// CALENDÁRIO
// ---------------------------
const titulo = document.getElementById("tituloMes");
const tabelaDias = document.getElementById("diasTabela");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let dataAtual = new Date();

function atualizarCalendario() {
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  titulo.textContent = `${nomesMeses[mes]} de ${ano}`;

  const primeiroDia = new Date(ano, mes, 1).getDay();
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();

  tabelaDias.innerHTML = "";
  let linha = "<tr>";

  for (let i = 0; i < primeiroDia; i++) {
    linha += "<td></td>";
  }

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const dataCheia = `${String(dia).padStart(2, "0")}/${String(mes+1).padStart(2, "0")}/${ano}`;

    // Marcar dias com agendamentos reais!
    let classe = "";
    historico.forEach(ag => {
      const [anoA, mesA, diaA] = ag.data.split("-");
      const dataConvertida = `${diaA}/${mesA}/${anoA}`;

      if (dataConvertida === dataCheia) {
        classe = "consulta-dia";
      }
    });

    linha += `<td class="${classe}">${dia}</td>`;

    if ((primeiroDia + dia) % 7 === 0) {
      linha += "</tr><tr>";
    }
  }

  linha += "</tr>";
  tabelaDias.innerHTML = linha;
}

btnPrev.onclick = () => {
  dataAtual.setMonth(dataAtual.getMonth() - 1);
  atualizarCalendario();
};

btnNext.onclick = () => {
  dataAtual.setMonth(dataAtual.getMonth() + 1);
  atualizarCalendario();
};

atualizarCalendario();
