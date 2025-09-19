function geoFindMe() {
  var status = document.querySelector(".status");

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    createMap(latitude, longitude);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating!";
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

var btn = document.querySelector(".find-me");
btn.addEventListener("click", geoFindMe);
