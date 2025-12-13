
// adiciona os links
function injectHeaderLinks() {
    const linksContainer = document.getElementById("links");

    links["links"].forEach(item => {
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.titulo;
        a.classList.add("home-link");
        a.target = "_blank";     
        linksContainer.appendChild(a);
    });
}

let map;
let markers = [];
let geocoder; 

// Inicializa o mapa em Belo Horizonte
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -19.92071, lng: -43.93772 }, 
        zoom: 12,
    });
    geocoder = new google.maps.Geocoder();

    document.getElementById("formMamae").addEventListener("submit", handleSearch);
    injectHeaderLinks();
}


// Limpa os marcadores
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// Adiciona um marcador 
function addMarker(unidade) {
    const address = unidade.endereco; 

    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results[0]) {
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location, 
                title: unidade.nome,
            });
        }
    });
}

// Lógica para buscar as unidades
function handleSearch(event) {
    event.preventDefault(); 

    clearMarkers(); // Limpa os marcadores anteriores

    const uf = document.getElementById("uf").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const bairro = document.getElementById("bairro").value.trim();

    // Endereço para o Geocoder
    const enderecoBusca = `${bairro}, ${cidade}, ${uf}`.trim();

    if (!cidade) {
        alert("Por favor, preencha a Cidade para realizar a busca.");
        return; 
    }
    geocoder.geocode({ address: enderecoBusca }, (results, status) => {
        if (status === "OK" && results[0]) {
            // 2. Centraliza o mapa no endereço digitado
            const centroBusca = results[0].geometry.location;
            map.setCenter(centroBusca);
            map.setZoom(14); 

            // 3. Filtra as unidades
            const cidadeLower = cidade.toLowerCase();
            const unidadesFiltradas = unidades.filter(unidade => {
                return unidade.endereco.toLowerCase().includes(cidadeLower);
            });

            if (unidadesFiltradas.length > 0) {
                // 4. Adiciona marcadores para as unidades
                unidadesFiltradas.forEach(addMarker);
            } else {
                alert(`Nenhuma unidade de saúde encontrada para a região de ${cidade}.`);
            }

        } else {
            alert(`Não foi possível localizar o endereço "${enderecoBusca}". Voltando para o centro de BH.`);
            map.setCenter({ lat: -19.92071, lng: -43.93772 });
            map.setZoom(12);
        }
    });
}