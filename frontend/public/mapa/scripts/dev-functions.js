// DEV - TESTES
var definindoOrigem = true;
map.on('click', function(e) {
    if(definindoOrigem){
        // Limpa a rota anteriormente feita
        if(typeof camadaRota !== 'undefined'){
            camadaRota.clearLayers();
            finishNavigation();
        }

        userPosition = e.latlng;

        // Atualiza o marcador do usuário
        if (!userMarker) {
            userMarker = L.marker(userPosition, {icon: iconGPS, zIndexOffset: 1000}).addTo(map);
        } else {
            userMarker.setLatLng(userPosition);
        }

        definindoOrigem = false;
    }
    else { 
        // Recebe o destino do usuário por meio do click
        destinationPosition = e.latlng;

        // Confirmação de destino
    var conteudoPopup = `
        <div class="popup-navegacao" style="margin:0; padding:0;">
            <button class="btn-ir" onclick="confirmarNavegacao()">
                IR
            </button>
        </div>
        `;


        L.popup()
            .setLatLng(destinationPosition)
            .setContent(conteudoPopup)
            .openOn(map);

        // Window para o html do popup
        window.confirmarNavegacao = function() {
            // Fecha o popup
            map.closePopup();

            calculateRoute(userPosition, destinationPosition);
            definindoOrigem = true;
        }
    }
});

// --- MEXER COM O TECLADO ---
const passoMovimento = 0.00002; 
const teclasPressionadas = {};

document.addEventListener('keydown', function(event) {
    teclasPressionadas[event.key] = true;
});

document.addEventListener('keyup', function(event) {
    teclasPressionadas[event.key] = false;
});

setInterval(function() {
    if (!userPosition || !userMarker) return;

    let novaLat = userPosition.lat;
    let novaLng = userPosition.lng;
    let moveu = false;
    
    // Cima
    if (teclasPressionadas['ArrowUp'] || teclasPressionadas['w'] || teclasPressionadas['W']) {
        novaLat += passoMovimento;
        moveu = true;
    }
    // Baixo
    if (teclasPressionadas['ArrowDown'] || teclasPressionadas['s'] || teclasPressionadas['S']) {
        novaLat -= passoMovimento;
        moveu = true;
    }
    // Esquerda
    if (teclasPressionadas['ArrowLeft'] || teclasPressionadas['a'] || teclasPressionadas['A']) {
        novaLng -= passoMovimento;
        moveu = true;
    }
    // Direita
    if (teclasPressionadas['ArrowRight'] || teclasPressionadas['d'] || teclasPressionadas['D']) {
        novaLng += passoMovimento;
        moveu = true;
    }

    if (moveu) {
        userPosition = L.latLng(novaLat, novaLng);
        userMarker.setLatLng(userPosition);
        
        map.panTo(userPosition); 
        geofencer(userPosition);

        if (destinationPosition) {
            var dist = 0;
            if (lastCalculatedPosition) {
                dist = userPosition.distanceTo(lastCalculatedPosition);
            }

            if (!lastCalculatedPosition || dist > 10) {
                calculateRoute(userPosition, destinationPosition);
                lastCalculatedPosition = userPosition; 
            }
        }
    }

}, 50);