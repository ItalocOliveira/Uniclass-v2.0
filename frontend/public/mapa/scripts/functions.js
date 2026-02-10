// Troca de andares (inutilizado por enquanto)
// function changeFloor(floor){
//     currentFloor = floor;

//     Object.values(indoorLayers).forEach(layer => {
//         if (map.hasLayer(layer)) map.removeLayer(layer);
//     });
//     Object.values(labelsLayer).forEach(layer => {
//         if (map.hasLayer(layer)) map.removeLayer(layer);
//     });

//     // if (indoorLayers[floor]) {
//     //     indoorLayers[floor].addTo(map);
//     // }
//     // if (markers[floor]) {
//     //     markers[floor].addTo(map);
//     // }
//     console.log(`Andar atualizado: Andar ${floor}`);
// }

// Pontos de destino
function selectLocation(searchTerm){
    const localEncontrado = locais.find(feature => 
        feature.properties.nome.toLowerCase() === searchTerm.toLowerCase()
    );

    if (!localEncontrado) {
        alert("Local não encontrado!");
        return;
    }

    const coordenadas = localEncontrado.geometry.coordinates;
    const latLngDestino = L.latLng(coordenadas[1], coordenadas[0]); 
    const andarDestino = localEncontrado.properties.level || 0;
    
    currentFloor = andarDestino;
    console.log(`Andar do destino definido para: ${currentFloor}`);

    destinationPosition = latLngDestino;

    routesLayer.clearLayers();

    L.marker(destinationPosition)
        .bindPopup(`<b>${localEncontrado.properties.nome}</b><br>Andar: ${andarDestino}`)
        .addTo(routesLayer)
        .openPopup();

    // Calcula rota se tiver GPS
    if (typeof userPosition !== 'undefined' && userPosition) {
        calculateRoute(userPosition, destinationPosition);
    } else {
        alert("Aguardando localização GPS...");
    }

    // if (indoorLayers[floor]) {
    //     indoorLayers[floor].addTo(map);
    // }
    // if (markers[floor]) {
    //     markers[floor].addTo(map);
    // }

    console.log(`Andar atualizado: Andar ${floor}`);
}

function togglePopupContent(nomeComercio, destino) {
    if (window.popupTemplates && window.popupTemplates[nomeComercio]) {
        const novoConteudo = window.popupTemplates[nomeComercio][destino];
        const popup = map._popup;

        if (popup) {
            const oldAutoPan = popup.options.autoPan;
            popup.options.autoPan = false;

            popup.setContent(novoConteudo);
            popup.update();

            // ⬇️ ESSENCIAL: reaplicar após trocar conteúdo
            setTimeout(() => {
                if (popup._container) {
                    L.DomEvent.disableClickPropagation(popup._container);
                    L.DomEvent.disableScrollPropagation(popup._container);
                }
                popup.options.autoPan = oldAutoPan;
            }, 0);
        }
    }
}

// LÓGICA DE INTERIORES
function getBuildingAtPosition(pos){
    if(!buildingsWithInterior) return null;

    var coordsArray = [pos.lng, pos.lat];
    
    const results = leafletPip.pointInLayer(coordsArray, buildingsWithInterior);

    if (results.length > 0) {
        return results[0].feature.properties; 
    }

    return null;
}

function geofencer(pos) {
    // Verificar se a posição está em um prédio
    const currentBuilding = getBuildingAtPosition(pos);
    const currentBuildingName = currentBuilding? currentBuilding.nome : null;

    // Se um o usuário estiver em um prédio, renderizar o inteiror do prédio.
    if(currentBuildingName){
        enterPlace(currentBuildingName);
    }
    else {
        if (typeof lastPhysicalBuilding !== 'undefined' && lastPhysicalBuilding) {
            exitPlace(lastPhysicalBuilding);
            lastPhysicalBuilding = null;
        }
    }

    if (currentBuildingName) {
        lastPhysicalBuilding = currentBuildingName;
    }
    if (onRoute && typeof destinationBuilding !== 'undefined' && destinationBuilding) {
        enterPlace(destinationBuilding);
    }
}

function enterPlace(placeName){
    if(activeBuildings.has(placeName)) return;

    console.log(`ADICIONANDO AO RENDER: ${placeName}`);

    activeBuildings.add(placeName);

    indoorRenderizer();
    // if (propriedades.tipo === "comercio") {
    //     console.log("Abrindo cardápio...");
    //     // abrirModalComercio(propriedades.nome);
    // }

    // if (propriedades.layer === "areas_restritas") {
    //     alert("⚠️ ÁREA RESTRITA! APENAS FUNCIONÁRIOS.");
    // }
}

function exitPlace(placeName) {
    if (!activeBuildings.has(placeName)) return;

    console.log(`REMOVENDO DO RENDER: ${placeName}`);
    activeBuildings.delete(placeName);
    indoorRenderizer();
}

function clearIndoorLayers() {
    Object.values(indoorLayers).forEach(layer => {
        if (map.hasLayer(layer)) map.removeLayer(layer);
    });
}

// RENDERS
function renderMarkers(features) {
    markers.clearLayers();

    features.forEach(local => {
        // Retirando informações do geojson
        var coords = local.geometry.coordinates; 
        var latLng = [coords[1], coords[0]];     
        var props = local.properties;        

        const tipo = props.tipo ? props.tipo.toLowerCase() : '';
        const nome = props.nome ? props.nome.toLowerCase() : '';


        const config = markerConfig[nome] || markerConfig[tipo];

        if(config) {
            const dadosExtras = (config.dataSource && config.dataSource[props.nome]) ? config.dataSource[props.nome] : {};
            const imageFinal = dadosExtras.img || "documents/imgs/no-image.jpg";
            const descFinal = dadosExtras.desc || "Sem descrição disponível.";

            const popupContent = `
                <div class="popup">
                    <h3>${props.nome}</h3>
                    <img src="${imageFinal}" alt="${props.nome}" onerror="this.src='documents/imgs/no-image.jpg'"/>
                    <p>${descFinal}</p>
                </div>
            `;

            let labelMarker = L.marker(latLng, {
                icon: L.icon({
                    iconUrl: `documents/imgs/assets/${config.icon}`,
                    iconSize: config.size,
                    iconAnchor: config.anchor,
                    popupAnchor: [0, -32]
                }),
                interactive: true
            });

            labelMarker.bindPopup(popupContent);
            markers.addLayer(labelMarker);
        }
    });
    
    if (!map.hasLayer(markers)) markers.addTo(map);
}

function indoorRenderizer(){
    Object.keys(indoorLayers).forEach(buildingName => {
        if (activeBuildings.has(buildingName)) {
            if (!map.hasLayer(indoorLayers[buildingName])) {
                console.log(buildingName + " adicionado a indoorlayers" )
                indoorLayers[buildingName].addTo(map);
            }
        } 
        else {
            if (map.hasLayer(indoorLayers[buildingName])) {
                map.removeLayer(indoorLayers[buildingName]);
            }
        }
    });
}

// PAINEIS
function dynamicPanel(meters) {
    var painelDistancia = document.getElementById('painel-distancia');
    var textoDistancia = document.getElementById('distancia-texto');
    var painelChegada = document.getElementById('painel-chegada');

    // Torna o painel visivel no css
    painelDistancia.style.display = 'block';

    // Verificação de chegada
    if (meters < 15) {
        painelDistancia.style.display = 'none';
        painelChegada.style.display = 'block';
    }
    else {
        if (meters > 15 && meters < 1000) {
            // Converte para Km se for longe
            textoDistancia.innerText = Math.round(meters) + " m";
        }
        else {
            textoDistancia.innerText = (meters / 1000).toFixed(1) + " km";
        }
    }
}