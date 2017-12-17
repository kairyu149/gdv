//Initialisieren Map, setView auf Bonn, Angabe Zoom
var mapBonn = L.map('map_id1').setView([50.735, 7.10], 13);

//Credits zu Karte
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mapBonn);

function onEachFeature(feature) {
    var marker = L.marker(feature.geometry.coordinates).addTo(mapBonn);
    marker.bindPopup("<b> Verkehrsstatus: <b/>" + feature.properties.verkehrsstatus);
}

L.geoJSON(VerkehrslageTest, {onEachFeature: onEachFeature}).addTo(map);