var limitesDoCampus = L.latLngBounds(
    // Canto Inferior Esquerdo
    [-7.16353530137493, -34.85958937363623],
    // Canto Superior Direito
    [-7.155443330743842, -34.84868800422955]  
);

// Inicialização do mapa
var map = L.map('map', {
    center: [-7.159, -34.855],
    zoom: 17,
    minZoom: 18,
    maxZoom: 21,
    maxBounds: limitesDoCampus, 
    maxBoundsViscosity: 1.0,
    zoomSnap: 0,
});

// Renderização do mapa
L.tileLayer('map-docs/tiles/level_0/base/{z}/{x}/{y}.png', {
    minZoom: 17,
    maxZoom: 21,
    tms: false,
    attribution: '© UNIPÊ - Mapa interativo'
}).addTo(map);

// Grupo de camadas para controle
var markers = L.layerGroup();
var routesLayer = L.layerGroup().addTo(map); 

// PANES
// Vermelho
map.createPane('paneG');
map.createPane('paneH');
map.createPane('paneI');
map.getPane('paneI').style.zIndex = 440;
map.getPane('paneH').style.zIndex = 450;
map.getPane('paneG').style.zIndex = 460;
// Amarelo
map.createPane('paneCT');
map.createPane('paneK');
map.createPane('paneL');
map.createPane('paneJ');
map.getPane('paneCT').style.zIndex = 440;
map.getPane('paneJ').style.zIndex = 450;
map.getPane('paneK').style.zIndex = 450;
map.getPane('paneL').style.zIndex = 460;
// Laranja
map.createPane('paneA');
map.createPane('paneB');
map.createPane('paneC');
map.createPane('corredorAL');
map.createPane('corredorAO');
map.getPane('paneC').style.zIndex = 440;
map.getPane('corredorAO').style.zIndex = 450;
map.getPane('corredorAL').style.zIndex = 450;
map.getPane('paneB').style.zIndex = 460;
map.getPane('paneA').style.zIndex = 470;
// Verde
map.createPane('paneS');
map.createPane('paneAuditorio');
map.createPane('corredorS');
map.getPane('paneS').style.zIndex = 440;
map.getPane('paneAuditorio').style.zIndex = 440;
map.getPane('corredorS').style.zIndex = 450;
// Roxo
map.createPane('paneD');
map.createPane('paneE');
map.createPane('paneF');
map.createPane('corredorFN');
map.createPane('corredorFS');
map.getPane('paneD').style.zIndex = 440;
map.getPane('corredorFN').style.zIndex = 450;
map.getPane('paneE').style.zIndex = 460;
map.getPane('corredorFS').style.zIndex = 470;
map.getPane('paneD').style.zIndex = 480;
// Comércio
map.createPane('paneCantinaCT');
map.createPane('paneComercioMuseu');
map.createPane('paneDonaChica');
map.createPane('paneMinacai');
map.createPane('panePizzaria');
map.createPane('paneTapiocabana');
map.getPane('paneCantinaCT').style.zIndex = 440;
map.getPane('paneComercioMuseu').style.zIndex = 450;
map.getPane('paneDonaChica').style.zIndex = 440;
map.getPane('paneMinacai').style.zIndex = 460;
map.getPane('panePizzaria').style.zIndex = 470;
map.getPane('paneTapiocabana').style.zIndex = 480;

map.on('popupopen', function(e) {
    var container = e.popup._container;

    L.DomEvent.disableClickPropagation(container);
});