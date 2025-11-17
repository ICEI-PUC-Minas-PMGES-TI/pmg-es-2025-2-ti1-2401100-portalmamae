async function carregarProntuario() {
  try {
    const resposta = await fetch("mostraprontuario/mostraDadosPront.json");
    const dados = await resposta.json();

    const p = dados.prontuario;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("idade").textContent = p.idade;
    document.getElementById("motivo").textContent = p.motivo;
    document.getElementById("historia").textContent = p.historia;
    document.getElementById("exames").textContent = p.exames;
    document.getElementById("diagnostico").textContent = p.diagnostico;

  } catch (erro) {
    console.error("Erro ao carregar o prontuário:", erro);
    alert("Não foi possível carregar o prontuário.");
  }
}

document.addEventListener("DOMContentLoaded", carregarProntuario);
