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

function getBoundsFromCenter(latLng, sizeInMeters) {
    var lat = latLng[0];
    var lng = latLng[1];
    
    var latOffset = (sizeInMeters / 2) / 111111;
    
    var lngOffset = (sizeInMeters / 2) / (111111 * Math.cos(lat * (Math.PI / 180)));

    var sw = [lat - latOffset, lng - lngOffset];
    var ne = [lat + latOffset, lng + lngOffset];

    return [sw, ne];
}








