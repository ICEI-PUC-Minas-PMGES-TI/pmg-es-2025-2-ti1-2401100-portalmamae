// Gera horários de 00:00 a 23:30
function gerarHorarios() {
  const select = document.getElementById("horario");
  for (let h = 0; h < 24; h++) {
    for (let m of ["00", "30"]) {
      const hora = `${String(h).padStart(2, "0")}:${m}`;
      const option = document.createElement("option");
      option.value = hora;
      option.textContent = hora;
      select.appendChild(option);
    }
  }
}

// Define a data mínima
function configurarDataMinima() {
  const dataInput = document.getElementById("data");
  dataInput.min = "2025-01-01";
  dataInput.value = "2025-01-01";
}

// Buscar CEP
async function buscarCEP(cep) {
  cep = cep.replace(/\D/g, "");
  if (cep.length !== 8) return;

  try {
    const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (!dados || dados.erro) {
      alert("❌ CEP não encontrado!");
      return;
    }

    document.getElementById("uf").value = dados.uf;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("rua").value = dados.logradouro;

  } catch (erro) {
    console.error("Erro na busca do CEP:", erro);
    alert("Não foi possível buscar o CEP agora. Tente novamente.");
  }
}

document.getElementById("cep").addEventListener("blur", (e) => {
  buscarCEP(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  gerarHorarios();
  configurarDataMinima();
});

// Limpa tudo do formulário após envio
function limparFormulario() {
  const form = document.getElementById("formMamae");
  form.reset();

  document.getElementById("uf").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("rua").value = "";
  document.getElementById("horario").selectedIndex = 0;
}

// Salva no histórico corretamente
function salvarNoHistorico(dados) {
  let historico = JSON.parse(localStorage.getItem("historicoAgendamentos")) || [];
  historico.push(dados);

  // Agora realmente salva o histórico completo!
  localStorage.setItem("historicoAgendamentos", JSON.stringify(historico));
}

// Envio do formulário
document.getElementById("formMamae").addEventListener("submit", function (event) {
  event.preventDefault();

  const dadosFormulario = {
    uf: document.getElementById("uf").value,
    cidade: document.getElementById("cidade").value,
    rua: document.getElementById("rua").value,
    cep: document.getElementById("cep").value,
    servico: document.getElementById("servico").value,
    especialidade: document.getElementById("especialidade").value,
    data: document.getElementById("data").value,
    horario: document.getElementById("horario").value,
    acompanhamento: document.querySelector('input[name="acompanhamento"]:checked').value,
  };

  // Envia para a próxima página
  localStorage.setItem("agendamentoAtual", JSON.stringify(dadosFormulario));

  // Salva no histórico corretamente
  salvarNoHistorico(dadosFormulario);

  alert("✅ Dados enviados com sucesso!");

  limparFormulario();

  window.location.href = "/codigo/agenda/agendaG.html";
});
