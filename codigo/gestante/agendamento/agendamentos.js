
// VERIFICA LOGIN DA GESTANTE

const gestanteLogada = JSON.parse(localStorage.getItem("gestanteLogada"));

if (!gestanteLogada || !gestanteLogada.cpf) {
  alert("Sessão expirada. Faça login novamente.");
  window.location.href = "/codigo/gestante/loginGestante/loginGestante.html";
}


// GERA HORÁRIOS

function gerarHorarios() {
  const select = document.getElementById("horario");
  select.innerHTML = '<option value="">Selecione o horário</option>';

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


// DATA MÍNIMA

function configurarDataMinima() {
  const dataInput = document.getElementById("data");
  const hoje = new Date().toISOString().split("T")[0];
  dataInput.min = hoje;
}


// BUSCAR CEP

async function buscarCEP(cep) {
  cep = cep.replace(/\D/g, "");
  if (cep.length !== 8) return;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();

    if (dados.erro) {
      alert("CEP não encontrado.");
      return;
    }

    document.getElementById("uf").value = dados.uf;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("rua").value = dados.logradouro;

  } catch (error) {
    alert("Erro ao buscar CEP.");
  }
}

document.getElementById("cep").addEventListener("blur", e => {
  buscarCEP(e.target.value);
});

// MOSTRAR / ESCONDER MÉDICO

const radios = document.querySelectorAll('input[name="acompanhamento"]');
const campoMedico = document.getElementById("campoMedico");
const nomeMedicoInput = document.getElementById("nomeMedico");

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Sim" && radio.checked) {
      campoMedico.style.display = "block";
      nomeMedicoInput.required = true;
    } else {
      campoMedico.style.display = "none";
      nomeMedicoInput.value = "";
      nomeMedicoInput.required = false;
    }
  });
});


// LIMPAR FORMULÁRIO

function limparFormulario() {
  document.getElementById("formMamae").reset();
  campoMedico.style.display = "none";
}


// ENVIO DO FORMULÁRIO

document.getElementById("formMamae").addEventListener("submit", async function (e) {
  e.preventDefault();

  const dadosAgendamento = {
    localConsulta: document.getElementById("localConsulta").value,
    uf: document.getElementById("uf").value,
    cidade: document.getElementById("cidade").value,
    rua: document.getElementById("rua").value,
    cep: document.getElementById("cep").value,
    servico: document.getElementById("servico").value,
    especialidade: document.getElementById("especialidade").value,
    data: document.getElementById("data").value,
    horario: document.getElementById("horario").value,
    acompanhamento: document.querySelector('input[name="acompanhamento"]:checked').value,
    nomeMedico: nomeMedicoInput.value || null,
    criadoEm: new Date().toISOString()
  };

  try {
    const response = await fetch(
      `http://localhost:3000/gestantes?cpf=${gestanteLogada.cpf}`
    );
    const gestantes = await response.json();

    if (gestantes.length === 0) {
      alert("Gestante não encontrada.");
      return;
    }

    const gestante = gestantes[0];
    gestante.agendamentos.push(dadosAgendamento);

    await fetch(`http://localhost:3000/gestantes/${gestante.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agendamentos: gestante.agendamentos
      })
    });

    alert("✅ Agendamento realizado com sucesso!");
    limparFormulario();
    window.location.href = "/codigo/gestante/agenda/agendaG.html";

  } catch (error) {
    console.error(error);
    alert("Erro ao salvar agendamento.");
  }
});

// ===============================
document.addEventListener("DOMContentLoaded", () => {
  gerarHorarios();
  configurarDataMinima();
});
