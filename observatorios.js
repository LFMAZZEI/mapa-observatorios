var mapa = L.map('map').setView([-15.78, -47.93], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Dados fictícios
var observatorios = [
  { nome: "Observatório ENSP", lat: -22.9035, lon: -43.2096 },
  { nome: "Observatório UFBA", lat: -12.9714, lon: -38.5014 }
];

observatorios.forEach(function(obs) {
  L.marker([obs.lat, obs.lon]).addTo(mapa).bindPopup(obs.nome);
});