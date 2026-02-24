// RENDERS
function markersRenderizer(features) {
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
            const imageFinal = dadosExtras.img || "map-docs/imgs/no-image.jpg";
            const descFinal = dadosExtras.desc || "Sem descrição disponível.";

            const popupContent = `
                <div class="popup">
                    <h3>${props.nome}</h3>
                    <img src="${imageFinal}" alt="${props.nome}" onerror="this.src='map-docs/imgs/no-image.jpg'"/>
                    <p>${descFinal}</p>
                </div>
            `;

            let labelMarker = L.marker(latLng, {
                icon: L.icon({
                    iconUrl: `map-docs/imgs/assets/markers/${config.icon}`,
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

function processIndoorIcons(features) {
    features.forEach(feature => {
        var props = feature.properties;
        var coords = feature.geometry.coordinates;
        var centerLatLng = [coords[1], coords[0]]; 
        
        var predio = props.predio ? props.predio.trim() : "Desconhecido";
        var tipo = props.tipo ? props.tipo.toLowerCase() : 'default';
        
        var rotation = props.rotation || 0;

        if (indoorMarkers[tipo]) {
            var config = indoorMarkers[tipo];
            var bounds = getBoundsFromCenter(centerLatLng, config.sizeMeters);
            var layer;

            if (rotation !== 0) {

                var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
                svgElement.setAttribute('viewBox', "0 0 100 100");

                var imageInside = document.createElementNS("http://www.w3.org/2000/svg", "image");
                imageInside.setAttributeNS("http://www.w3.org/1999/xlink", "href", config.url);
                imageInside.setAttribute('x', '15'); 
                imageInside.setAttribute('y', '15');
                imageInside.setAttribute('width', '70');
                imageInside.setAttribute('height', '70');

                imageInside.setAttribute('transform', `rotate(${rotation} 50 50)`);

                svgElement.appendChild(imageInside);


                layer = L.svgOverlay(svgElement, bounds, {
                    interactive: true,
                    opacity: 0.9
                });
            } 
            else {
                layer = L.imageOverlay(config.url, bounds, {
                    interactive: true, 
                    opacity: 0.9      
                });
            }

            if (!indoorIconsByBuilding[predio]) {
                indoorIconsByBuilding[predio] = L.layerGroup();
            }

            indoorIconsByBuilding[predio].addLayer(layer);
        }
    });
}

function indoorRenderizer(currentPlace) {
    // Se não houver um prédio atual passado pelo geofencer, 
    // tentamos pegar o último do Set ou tratamos como vazio
    const activeBuildingName = currentPlace || Array.from(activeBuildings).pop();

    if (activeBuildingName) {
        Object.keys(buildingIndoorLayers).forEach(name => {
            if (name !== activeBuildingName && map.hasLayer(buildingIndoorLayers[name])) {
                map.removeLayer(buildingIndoorLayers[name]);
            }
        });

        // Adiciona o raio-x do local atual
        if(buildingIndoorLayers[activeBuildingName]){
            if (!map.hasLayer(buildingIndoorLayers[activeBuildingName])) {
                buildingIndoorLayers[activeBuildingName].addTo(map);
                console.log(`Efeito raio-x aplicado ao: ${activeBuildingName}`);
            }
        }

        if(map.hasLayer(buildingsLayer)) {
            map.removeLayer(buildingsLayer);
        }
        
    } else {
        if(!map.hasLayer(buildingsLayer)) {
            buildingsLayer.addTo(map);
            console.log("Restaurando prédios sólidos.");
        }

        Object.values(buildingIndoorLayers).forEach(layer => {
            if (map.hasLayer(layer)) map.removeLayer(layer);
        });
    }
}

function geofencer(pos) {
    const currentBuilding = getBuildingAtPosition(pos);
    const currentBuildingName = currentBuilding ? currentBuilding.nome : null;

    // Se mudou de prédio ou saiu de um
    if (currentBuildingName !== lastVisitedBuilding) {
        
        // Se saiu de um prédio anterior, removemos ele do Set
        if (lastVisitedBuilding) {
            exitPlace(lastVisitedBuilding);
        }

        // Se entrou em um novo, adicionamos
        if (currentBuildingName) {
            enterPlace(currentBuildingName);
        }
    }

    lastVisitedBuilding = currentBuildingName;

    // Lógica de destino da rota (opcional manter aqui ou no navigation)
    if (onRoute && destinationBuilding && !activeBuildings.has(destinationBuilding)) {
        // Apenas entra no local do destino se não estivermos nele
        enterPlace(destinationBuilding);
    }
}

function enterPlace(placeName) {
    activeBuildings.add(placeName);
    indoorRenderizer(placeName); 
}

function exitPlace(placeName) {
    activeBuildings.delete(placeName);
    indoorRenderizer();
}

function getBuildingAtPosition(pos){
    if(!buildingsWithInterior) return null;

    var coordsArray = [pos.lng, pos.lat];
    
    const results = leafletPip.pointInLayer(coordsArray, buildingsWithInterior);

    if (results.length > 0) {
        return results[0].feature.properties; 
    }

    return null;
}

function clearIndoorLayers() {
    Object.values(buildingIndoorLayers).forEach(layer => {
        if (map.hasLayer(layer)) map.removeLayer(layer);
    });
}

// Troca de andares (inutilizado por enquanto)
function changeFloor(floor){
    currentFloor = floor;

    indoorRenderizer();

    if (onRoute && destinationPosition) {
        calculateRoute(userPosition, destinationPosition);
    }

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


// // No indoor-engine.js ou main.js
// function otimizarCarregamento() {
//     const bounds = map.getBounds(); // Pega o que o usuário está vendo agora

//     Object.keys(buildingLayers).forEach(name => {
//         const layer = buildingLayers[name];
//         if (bounds.intersects(layer.getBounds())) {
//             if (!map.hasLayer(layer)) layer.addTo(map);
//         } else {
//             if (map.hasLayer(layer)) map.removeLayer(layer);
//         }
//     });
// }
// map.on('moveend', otimizarCarregamento);