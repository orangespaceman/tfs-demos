function requestISSLocation() {
    var apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new ISS location, update the page
            updateISSLocation(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// update the latitude and longitude displayed on the page
function updateISSLocation(data) {
    var latitudeElement = document.querySelector(".latitude");
    latitudeElement.textContent = data.latitude;

    var longitudeElement = document.querySelector(".longitude");
    longitudeElement.textContent = data.longitude;
}

// listen for clicks on the button
var updateButton = document.querySelector('.update');
updateButton.addEventListener("click", requestISSLocation);

// also update location on page load
requestISSLocation();