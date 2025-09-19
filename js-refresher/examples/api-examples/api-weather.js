function requestWeather() {
    // find select input
    var locationInput = document.querySelector(".location");

    var locations = {
        brighton: {
            lat: "50.815331",
            lon: "-0.136790",
        },
        london: {
            lat: "51.500833",
            lon: "-0.142984",
        },
        brasilia: {
            lat: "-15.793203",
            lon: "-47.883354",
        },
    }

    // find selected option's value
    var selectedLocation = locationInput.options[locationInput.selectedIndex].value;

    var selectedLocation = locations[selectedLocation];

    var apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}&daily=temperature_2m_max,temperature_2m_min`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new stories, update the page
            updateWeather(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// update the news
function updateWeather(data) {
  var mintemperatureElement = document.querySelector(".min-temperature");
  mintemperatureElement.textContent = data.daily.temperature_2m_min[0];

  var maxtemperatureElement = document.querySelector(".max-temperature");
  maxtemperatureElement.textContent = data.daily.temperature_2m_max[0];
}

// listen for clicks on the button
var searchButton = document.querySelector('.search');
searchButton.addEventListener("click", requestWeather);
