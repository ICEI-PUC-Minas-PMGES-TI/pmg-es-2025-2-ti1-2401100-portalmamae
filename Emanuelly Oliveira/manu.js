const dados = {
    "Dados do usuário": {
        "id": 1,
        "Nome completo": "Janaina Soares Pereira Cunha",
        "Nome social": "Não possui",
        "E-mail": "soares@gmail.com",
        "Telefone": "(31) 9 8888-2222"
    },

    "Atendimento": {

        "Dados do médico": {
            "id": 2,
            "nome": "Dr.(a) Alexandra Martins"
        },

        "Dados do hospital": {
            "id": 3,
            "nome hospital": "Hospital de BH",
            "Endereço": "Rua alguma coisa, 0000, BH, CEP: 00000-000"
        },
      
      "links": [
        {
          "id": 4,
          "titulo": "Informações médicas e resultados de exames",
          "link": "#"
        },
        {
          "id": 5,
          "titulo": "Consultas e exames agendados",
          "link": "#"
        }
        ]
    }
  };

    // Verifica se o objeto existe e popula os dados
  if (dados && dados["Dados do usuário"]) {
    document.getElementById("nome").value = dados["Dados do usuário"]["Nome completo"];
    document.getElementById("social").value = dados["Dados do usuário"]["Nome social"];
    document.getElementById("email").value = dados["Dados do usuário"]["E-mail"];
    document.getElementById("tel").value = dados["Dados do usuário"]["Telefone"];
  }

  if (dados && dados["Atendimento"]) {
    const atendimento = dados["Atendimento"];
    document.getElementById("medico").innerText = atendimento["Dados do médico"]["nome"];
    document.getElementById("hospital").innerText = atendimento["Dados do hospital"]["nome hospital"];
    document.getElementById("endereco").innerText = atendimento["Dados do hospital"]["Endereço"];

    // adiciona os links
    const linksContainer = document.getElementById("links");
    linksContainer.innerHTML = "";
    atendimento["links"].forEach(item => {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.titulo;
      a.classList.add("info-link");
      linksContainer.appendChild(a);
    });
  }