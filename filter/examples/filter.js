function requestData() {
    const dataUrl = "filter.json";

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

    const planetDistance = document.createElement("p");
    planetDistance.classList.add("planet-distance");
    planetDistance.textContent = "Distance from sun: " + planet.distanceFromSun;
    planetElement.appendChild(planetDistance);

    // add the planet to the page
    const planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}

// listen to changes in the search form
const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
let searchValue = "";

// check what search term has been entered
function updateSearchValue() {
    // trim() removes any spaces before/after the input
    // toLowerCase() makes the entered text lowercase
    searchValue = searchInput.value.trim().toLowerCase();

    // loop through all planet elements
    // show or hide each one based on the search term
    const planetElements = document.querySelectorAll(".planet");
    planetElements.forEach(showHidePlanet);
}

// every time the text field changes, run this
function showHidePlanet(planetElement) {

    // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");

    // if a search term has been set,
    // only display the planet if its name matches the search term
    } else {

        // get the name of the planet from its planet-name element
        const planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
        if (planetName.includes(searchValue)) {
            planetElement.classList.remove("hide");
        } else {
            planetElement.classList.add("hide");
        }
    }
}
