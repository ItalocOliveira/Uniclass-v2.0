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
L.tileLayer('documents/tiles/level_0/base/{z}/{x}/{y}.png', {
    minZoom: 17,
    maxZoom: 21,
    tms: false,
    attribution: '© Unitech - Mapa UNIPÊ'
}).addTo(map);

// Camadas
const indoorLayers = {
    "EVA": L.tileLayer('documents/tiles/level_0/indoor/eva/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 0.5, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco J": L.tileLayer('documents/tiles/level_0/indoor/bloco_j/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 0.5, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco A": L.tileLayer('documents/tiles/level_0/indoor/bloco_a/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 0.5, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "Bloco C": L.tileLayer('documents/tiles/level_0/indoor/bloco_c/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 0.5, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
    "CT": L.tileLayer('documents/tiles/level_0/indoor/ct/{z}/{x}/{y}.png', { 
        minZoom: 17, maxZoom: 21, tms: false, 
        opacity: 0.5, maxBounds: limitesDoCampus, maxBoundsViscosity: 1.0
    }),
};
const indoorMarkers = {
    'banheiro': {
        url: 'documents/imgs/assets/icons/wc-icon.png',
        sizeMeters: 5
    },
    'bebedouro': {
        url: 'documents/imgs/assets/icons/water-drinker-icon.png',
        sizeMeters: 5
    },
    'escada':{
        url: 'documents/imgs/assets/icons/stairs-icon.png',
        sizeMeters: 5
    },
    'elevador':{
        url: 'documents/imgs/assets/icons/elevator-icon.png',
        sizeMeters: 5
    }
    
};

// Grupo de camadas para controle
var markers = L.layerGroup();
var routesLayer = L.layerGroup().addTo(map); 