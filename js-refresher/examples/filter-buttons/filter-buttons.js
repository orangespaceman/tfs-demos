// retrieve planet data from JSON file
fetch('filter-buttons.json')
    .then((response) => response.json())
    .then((data) => {

        // once the data has loaded, create each planet
        data.forEach(addPlanetToPage);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


function addPlanetToPage(planet) {
    // create a div element for each element
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet");
    planetElement.classList.add("planet-" + planet.name);

    // add the planet name
    const planetName = document.createElement("p");
    planetName.classList.add("planet-name");
    planetName.textContent = planet.name;
    planetElement.appendChild(planetName);

    // add other planet details
    const planetCircumference = document.createElement("p");
    planetCircumference.classList.add("planet-circumference");
    planetCircumference.textContent = "Circumference: " + planet.circumference;
    planetElement.appendChild(planetCircumference);

    // distance
    const planetDistance = document.createElement("p");
    planetDistance.classList.add("planet-distance");
    planetDistance.textContent = "Distance from sun: " + planet.distanceFromSun;
    planetElement.appendChild(planetDistance);

    // life
    if (planet.hasLife) {
        const planetLife = document.createElement("p");
        planetLife.classList.add("planet-life");
        planetLife.textContent = "Has life!";
        planetElement.appendChild(planetLife);
    }

    // Major moons
    const planetMajorMoons = document.createElement("p");
    planetMajorMoons.classList.add("planet-major-moons");
    if (planet.majorMoons.length > 0) {
        planetMajorMoons.textContent = "Major Moons: " + planet.majorMoons.join(', ');
    } else {
        planetMajorMoons.textContent = "No moons";
    }
    planetElement.appendChild(planetMajorMoons);

    // Atmosphere
    const planetAtmosphere = document.createElement("p");
    planetAtmosphere.classList.add("planet-atmosphere");
    if (planet.atmosphere.length > 0) {
        planetAtmosphere.textContent = "Atmosphere: " + planet.atmosphere.join(', ');
    } else {
        planetAtmosphere.textContent = "No atmosphere";
    }
    planetElement.appendChild(planetAtmosphere);

    // add the planet to the page
    const planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}


// initial search values, which will be empty
let searchValue = "";
let filterButtonValue = "";


// listen to changes in the search form
const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// check what search term has been entered
function updateSearchValue() {
    // trim() removes any spaces before/after the input
    // toLowerCase() makes the entered text lowercase
    searchValue = searchInput.value.trim().toLowerCase();

    // once the search value is updated, filter the content
    showHidePlanets();
}

// add a listener to buttons
const planetButtonElements = document.querySelectorAll(".atmosphere-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
    const clickedButton = event.currentTarget;

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // set selected state for clicked button
    clickedButton.classList.add("currently-selected-button");

    // if we have clicked the 'All' button, remove all filters
    if (clickedButton.textContent === 'All') {
        filterButtonValue = '';
    // we have selected one of the atmosphere buttons, so use it in the filter
    } else {
        filterButtonValue = clickedButton.textContent.toLowerCase();
    }

    // once the filter value is updated, filter the content
    showHidePlanets();
}

function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

// every time the search changes, run this
// loop through all planet elements
// show or hide each one based on the search and filter values
function showHidePlanets() {
    const planetElements = document.querySelectorAll(".planet");
    planetElements.forEach(showHidePlanet);
}

function showHidePlanet(planetElement) {
    // get the details of the planet from its elements
    const planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
    const planetMoons = planetElement.querySelector(".planet-major-moons").textContent.toLowerCase();
    const planetAtmosphere = planetElement.querySelector(".planet-atmosphere").textContent.toLowerCase();

    // if the planet name OR planet moons include the search term
    // AND if the selected atmosphere matches the planet's atmosphere, display it
    if (
        (planetName.includes(searchValue) || planetMoons.includes(searchValue))
        && planetAtmosphere.includes(filterButtonValue)
    ) {
        planetElement.classList.remove("hide");
    } else {
        planetElement.classList.add("hide");
    }
}