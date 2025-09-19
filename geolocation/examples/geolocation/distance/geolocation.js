function geoFindMe() {
  var status = document.querySelector(".status");

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // buck pal
    var kingLat = 51.501476;
    var kingLon = -0.140634;

    var distance = calculateDistance(latitude, longitude, kingLat, kingLon);

    status.textContent = `You (${latitude}, ${longitude}) are ${Math.round(distance)} miles from the king (${kingLat}, ${kingLon})`;
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

// This comes from https://rosettacode.org/wiki/Haversine_formula#ES5
// pass in four params: lat1, lon2, lat2, lon2
// We assume the king's location is Buckingham Palace
function calculateDistance() {
  var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
  var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
  var R = 6372.8; // km
  var dLat = lat2 - lat1;
  var dLon = lon2 - lon1;
  var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.asin(Math.sqrt(a));
  return R * c;
}

var btn = document.querySelector(".find-me");
btn.addEventListener("click", geoFindMe);
