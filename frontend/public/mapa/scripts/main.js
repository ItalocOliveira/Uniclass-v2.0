// Variáveis de estado global
var currentFloor = 0;
// var destinationFloor = 0;
var locais = [];
var indoorIconsByBuilding = {};

var buildingsWithInterior = null;
var userMarker = null; 

// Nome do(s) Predio(s) em foco
var activeBuildings = new Set();
// Nome do Predio de destino(se o destino for realmente prédio)
var destinationBuilding = null;
// Coordenadas do destino
var destinationPosition = null;
// Nome do último prédio visitado
var lastVisitedBuilding = null;

var userPosition = null;

var lastCalculatedPosition = null;

var onRoute = false;

var currentMode = 'pedestrian';

// Fecth para obter locais;
fetch('map-docs/data/pontos_unipe.geojson') 
    .then(response => response.json())
    .then(data => {
        locais = data.features; 

        markersRenderizer(locais);
        
        console.log(`${locais.length} locais carregados.`);
    })
    .catch(err => console.error("Erro ao carregar locais:", err));

// Carregamento dos Ícones Indoor
fetch('map-docs/data/pontos_indoor_icones.geojson')
    .then(response => response.json())
    .then(data => {
        processIndoorIcons(data.features);
        
        console.log(`Ícones processados. Prédios com ícones: ${Object.keys(indoorIconsByBuilding).join(', ')}`);
        
        if (typeof indoorRenderizer === 'function') {
            indoorRenderizer();
        }
    })
    .catch(err => console.error("Erro ao carregar icones de pontos:", err));

// Fetch para obter geofencing
fetch('map-docs/data/predios_com_interior.geojson')
    .then(response => response.json())
    .then(data => {
        buildingsWithInterior= L.geoJSON(data);
        console.log(`Camada de Geofencing criada com sucesso.`);
    })
    .catch(err => console.error("Erro ao carregar predios:", err));