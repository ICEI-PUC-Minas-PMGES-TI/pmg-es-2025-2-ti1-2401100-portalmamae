let map;
let service;
let infowindow;

// Inicializa o mapa padrão
function inicializarMapa() {
  const brasil = { lat: -14.235, lng: -51.9253 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: brasil,
    zoom: 4,
  });
}

// Exibe o mapa no endereço do CEP
function mostrarMapaPorEndereco(endereco, servico) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: endereco }, function (results, status) {
    if (status === "OK" && results[0]) {
      const localizacao = results[0].geometry.location;
      map.setCenter(localizacao);
      map.setZoom(14);

      new google.maps.Marker({
        map: map,
        position: localizacao,
        title: "Seu endereço",
        icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      });

      buscarLocaisProximos(localizacao, servico);
    }
  });
}

// Busca locais próximos relacionados ao serviço (ex: hospital, clínica)
function buscarLocaisProximos(localizacao, servico) {
  const request = {
    location: localizacao,
    radius: 2000,
    keyword: servico || "hospital",
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((place) => {
        new google.maps.Marker({
          map,
          position: place.geometry.location,
          title: place.name,
          icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });
      });
    }
  });
}

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

// Busca CEP no ViaCEP (corrigido)
async function buscarCEP(cep) {
  cep = cep.replace(/\D/g, "");

  // Não tenta buscar CEP inválido
  if (cep.length !== 8) {
    return;
  }

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

    const enderecoCompleto = `${dados.logradouro}, ${dados.localidade}, ${dados.uf}`;
    const servico = document.getElementById("servico").value;

    // Só abre o mapa se existir a div #map
    if (window.google && map) {
      mostrarMapaPorEndereco(enderecoCompleto, servico);
    }

  } catch (erro) {
    console.error("Erro na busca do CEP:", erro);
    alert("Não foi possível buscar o CEP agora. Tente novamente.");
  }
}

// Listener: sair do campo CEP
document.getElementById("cep").addEventListener("blur", (e) => {
  buscarCEP(e.target.value);
});

// Ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  gerarHorarios();
  configurarDataMinima();
});

// Limpa tudo do formulário após envio
function limparFormulario() {
  const form = document.getElementById("formMamae");
  form.reset();

  // Limpa campos automáticos
  document.getElementById("uf").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("rua").value = "";

  // Reseta horários
  const select = document.getElementById("horario");
  select.selectedIndex = 0;
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

  const jsonDados = JSON.stringify(dadosFormulario, null, 2);
  alert(`✅ Dados enviados com sucesso!\n\n${jsonDados}`);
  console.log("📦 JSON gerado:", jsonDados);

  // Reseta formulário
  limparFormulario();
});
