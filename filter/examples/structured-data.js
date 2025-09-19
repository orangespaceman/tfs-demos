function requestData() {
    const dataUrl = "structured-data.json";

    fetch(dataUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // we will add a foreach loop to add content to our page here
            data.forEach(addPlanetToPage);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// request data on page load
requestData();


function addPlanetToPage(planet) {
    // create a div element for each element
    var planetElement = document.createElement("div");
    planetElement.classList.add("planet");
    planetElement.classList.add("planet-" + planet.name);

    // add the planet name
    var planetName = document.createElement("p");
    planetName.classList.add("planet-name");
    planetName.textContent = planet.name;
    planetElement.appendChild(planetName);

    // add other planet details
    var planetCircumference = document.createElement("p");
    planetCircumference.classList.add("planet-circumference");
    planetCircumference.textContent = "Circumference: " + planet.circumference;
    planetElement.appendChild(planetCircumference);

    var planetDistance = document.createElement("p");
    planetDistance.classList.add("planet-distance");
    planetDistance.textContent = "Distance from sun: " + planet.distanceFromSun;
    planetElement.appendChild(planetDistance);

    // add the planet to the page
    var planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}

