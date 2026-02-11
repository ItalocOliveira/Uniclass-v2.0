// Fórmula de Haversine para calcular a menor distância matemática 
// entre o usuário e um ponto específico
function getHaversineDistance(coords1, coords2) {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    var lat1 = coords1.lat;
    var lon1 = coords1.lng;
    var lat2 = coords2.lat;
    var lon2 = coords2.lng;

    var R = 6371e3;
    var x1 = lat2 - lat1;
    var dLat = toRad(x1);
    var x2 = lon2 - lon1;
    var dLon = toRad(x2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
}

// Faz chamada para a API do graphopper com a intenção de guardar apenas a distância 
// entre dois pontos em metros
async function getRouteDistanceOnly(pontoA, pontoB) {
    const baseUrl = "http://localhost:8989/route";

    var url =   `${baseUrl}?` +
                `point=${pontoA.lat},${pontoA.lng}` +
                `&point=${pontoB.lat},${pontoB.lng}` +
                `&profile=${currentMode}` +
                `&points_encoded=false` +
                `&locale=pt_BR`;

    try {
        const response = await fetch(url);
        if (!response.ok) return Infinity;
        
        const data = await response.json();
        if (!data.paths || data.paths.length === 0) return Infinity;

        return data.paths[0].distance;
    } catch (err) {
        console.error("Erro silencioso GH:", err);
        return Infinity;
    }
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

function getBoundsFromCenter(latLng, sizeInMeters) {
    var lat = latLng[0];
    var lng = latLng[1];
    
    var latOffset = (sizeInMeters / 2) / 111111;
    
    var lngOffset = (sizeInMeters / 2) / (111111 * Math.cos(lat * (Math.PI / 180)));

    var sw = [lat - latOffset, lng - lngOffset];
    var ne = [lat + latOffset, lng + lngOffset];

    return [sw, ne];
}

// Função auxiliar para desenhar rotas entre dois andares distintos
function updateRouteByFloor(){
    if (!onRoute) return;

    const nextStep = findNearestPoint("escada");
    
}