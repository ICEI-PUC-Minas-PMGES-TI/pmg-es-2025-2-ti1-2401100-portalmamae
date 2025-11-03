// Máscara CPF
function maskCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

async function loadDB() {
  try {
    const res = await fetch('db.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('db.json não encontrado');
    return await res.json();
  } catch {
    console.warn('Sem db.json local — usando fallback embutido');
    return window.__DB_FALLBACK__;
  }
}

// Fallback se abrir o HTML direto
window.__DB_FALLBACK__ = {
  gestantes: [
    {
      id: 1,
      cpf: '123.456.789-00',
      nome: 'Maria das Dores Almeida',
      idade: 29,
      email: 'maria.almeida@portalmae.com',
      telefone: '(31) 98888-1111',
      historicoMedico: [
        { data: '2025-03-10', descricao: 'Consulta pré-natal - 2º trimestre', resultado: 'Gestação saudável, pressão normal.' },
        { data: '2025-05-22', descricao: 'Exame de ultrassonografia', resultado: 'Bebê com desenvolvimento normal, sem alterações.' }
      ]
    },
    {
      id: 2,
      cpf: '987.654.321-11',
      nome: 'Juliana Ribeiro Costa',
      idade: 32,
      email: 'juliana.costa@portalmae.com',
      telefone: '(31) 97777-2222',
      historicoMedico: [
        { data: '2025-01-15', descricao: 'Exame de sangue completo', resultado: 'Hemoglobina dentro da normalidade.' }
      ]
    }
  ],
  medicos: [{ id: 1, nome: 'Dra. Helena Vasconcelos', especialidade: 'Ginecologia e Obstetrícia', crm: 'MG12345', email: 'helena.vasconcelos@portalmae.com' }]
};

document.getElementById('year').textContent = new Date().getFullYear();

const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', (e) => e.target.value = maskCPF(e.target.value));

document.getElementById('busca-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const cpf = cpfInput.value.trim();
  const container = document.getElementById('resultado');
  container.innerHTML = '';

  if (cpf.length !== 14) {
    container.innerHTML = '<p class="empty">Informe um CPF completo no formato 000.000.000-00.</p>';
    return;
  }

  const db = await loadDB();
  const gestante = db.gestantes.find(g => g.cpf === cpf);

  if (!gestante) {
    container.innerHTML = '<p class="empty">Nenhum registro encontrado para este CPF.</p>';
    return;
  }

  const historico = [...gestante.historicoMedico].sort((a,b)=> a.data.localeCompare(b.data));

  container.innerHTML = `
    <article class="result-card" role="region" aria-live="polite">
      <h2>${gestante.nome} <span class="badge">CPF verificado</span></h2>
      <p class="meta">Idade: <strong>${gestante.idade}</strong> • Email: <a href="mailto:${gestante.email}">${gestante.email}</a> • Tel: ${gestante.telefone}</p>
      <div class="hist">
        <h3>Histórico médico</h3>
        <ul>
          ${historico.map(h => `<li><strong>${h.data}</strong> — ${h.descricao}. <em>${h.resultado}</em></li>`).join('')}
        </ul>
      </div>
      <details style="margin-top:12px">
        <summary>Aviso de privacidade (LGPD)</summary>
        <p class="empty">Dados exibidos apenas para fins acadêmicos. Em produção: autenticação, autorização, consentimento e mascarar identificadores.</p>
      </details>
    </article>
  `;
});

document.getElementById('busca-form').addEventListener('reset', () => {
  document.getElementById('resultado').innerHTML = '';
  cpfInput.focus();
});
