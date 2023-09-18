let map = L.map("map").setView([-19.81981378095318, 34.8617618481015], 14);
let geoloc = document.querySelector("#geoloc");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);

let circle = L.circle([-19.81981378095318, 34.8617618481015], {
  color: "green",
  fillColor: "#ff7800",
  fillOpacity: 0.3,
  radius: 1000,
  weight: 0.3,
}).addTo(map);

let popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      "Voce selecionou a posicao com a seguinte " + e.latlng.toString()
    )
    .openOn(map);

  geoloc.value = e.latlng.toString();
}

map.on("click", onMapClick);

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);
