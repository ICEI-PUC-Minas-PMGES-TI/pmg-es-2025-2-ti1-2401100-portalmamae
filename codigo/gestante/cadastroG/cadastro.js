document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const cpf = document.getElementById('cpf').value;

    const novaGestante = {
      id: `G${Date.now()}`,
      nome_completo: document.getElementById('nome').value,
      idade: calcularIdade(document.getElementById('dataNascimento').value),
      cpf: cpf,
      senha: senha,
      telefone: document.getElementById('telefone').value,
      email: document.getElementById('email').value,
      endereco: {},
      agendamentos: [],
      quadro_medico: {
        portador_doencas_transmissiveis: false,
        possui_diabetes: false,
        possui_outras_doencas: "nenhuma",
        utiliza_medicamentos_controlados: false,
        em_tratamento: false,
        alergia_a_medicamentos: false,
        alergia_detalhe: ""
      }
    };

    try {
      await fetch('http://localhost:3000/gestantes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaGestante)
      });

      // salva sessão
      localStorage.setItem('gestante_cpf_logada', cpf.replace(/\D/g, ''));

      alert('Cadastro realizado com sucesso!');
      window.location.href = '/codigo/gestante/portalG/portalG.html';

    } catch (err) {
      console.error(err);
      alert('Erro ao cadastrar gestante');
    }
  });
});

function calcularIdade(data) {
  const [dia, mes, ano] = data.split('/');
  const nascimento = new Date(ano, mes - 1, dia);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  if (
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())
  ) idade--;
  return idade;
}
