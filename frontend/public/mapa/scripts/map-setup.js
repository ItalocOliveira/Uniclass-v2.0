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