const JSON_URL = 'http://localhost:3000/gestantes/G00012';

const nomeCompleto = document.querySelector('#nomeCompleto');
const listaMedica = document.querySelector('.listaMedica');
const listaExames = document.querySelector('.exames');
const idadeGestante = document.querySelector('.idadeGestante');

async function carregaDados() {
    
    const response = await fetch(JSON_URL);
    const data = await response.json();

    nomeCompleto.textContent = data.nome_completo;
    


    quadroMedico(data.quadro_medico);

    mostraExames(data.resultado_exames);

    mostraIdade(data.idade);
}

function quadroMedico (quadro)
{
    const traduzir = (booleano) => booleano ? 'Sim' : 'Não';
    if (!listaMedica) return;

    const itens = [
        `<strong>Portadora de Doenças Transmissíveis:</strong> ${traduzir(quadro.portador_doencas_transmissiveis)}`,
        `<strong>Possui Diabetes:</strong> ${traduzir(quadro.possui_diabetes)}`,
        `<strong>Outras Doenças:</strong> ${quadro.possui_outras_doencas}`,
        `<strong>Utiliza Medicamentos Controlados:</strong> ${traduzir(quadro.utiliza_medicamentos_controlados)}`,
        `<strong>Em Tratamento:</strong> ${traduzir(quadro.em_tratamento)}`,
        `<strong>Alergia a Medicamentos:</strong> ${traduzir(quadro.alergia_a_medicamentos)}`,
    ];

    if (quadro.alergia_a_medicamentos)
    {
        itens.push(`<strong>Detalhe da Alergia:</strong> ${quadro.alergia_detalhe}`);
    }

    listaMedica.innerHTML = '';
    itens.forEach(texto => {
        const li = document.createElement('li');
        li.innerHTML = texto;
        listaMedica.appendChild(li);
    });
}

function mostraExames (examesJSON)
{
    listaExames.innerHTML = '';

    examesJSON.forEach(exames => {
        const liExames = document.createElement('li');

        liExames.innerHTML = `<strong>${exames.nome_exame}:</strong> ${exames.data_exame}<br> <a href = "${exames.arquivo_url}">${exames.arquivo_url}</a>`;

       
        listaExames.appendChild(liExames);
    });
}

function mostraIdade (idade)
{
    idadeGestante.innerHTML = '';

    const h3Idade = document.createElement('h3');

    h3Idade.innerHTML = `Idade: ${idade}`;

    idadeGestante.append(h3Idade);
}
carregaDados();