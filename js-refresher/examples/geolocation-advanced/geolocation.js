function geoFindMe() {
  const status = document.querySelector(".status");

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    createMap(latitude, longitude);
    const distance = calculateDistanceFromTheKing(latitude, longitude, 51.501476, -0.140634);
    status.textContent = `You are ${Math.round(distance)} miles from the king`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function createMap(latitude, longitude) {
  const map = L.map('mapid').setView([latitude, longitude], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  L.marker([latitude, longitude]).addTo(map);
}

// This comes from https://rosettacode.org/wiki/Haversine_formula#ES5
// pass in four params: lat1, lon2, lat2, lon2
// We assume the king's location is Buckingham Palace
function calculateDistanceFromTheKing() {
  const radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
  const lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
  const R = 6372.8; // km
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));
  return R * c;
}

const btn = document.querySelector(".find-me");
btn.addEventListener("click", geoFindMe);
