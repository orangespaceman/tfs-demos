const planets = [
    {
        name: "Mercury",
        circumference: "2,500 km",
        distanceFromSun: "57,000,000 km",
    },
    {
        name: "Venus",
        circumference: "28,000 km",
        distanceFromSun: "108,000,000 km",
    },
    {
        name: "Earth",
        circumference: "40,000 km",
        distanceFromSun: "150,000,000 km",
    },
    {
        name: "Mars",
        circumference: "227,000,000km",
        distanceFromSun: "21,000km",
    },
    {
        name: "Jupiter",
        circumference: "779,000,000km",
        distanceFromSun: "440,000km",
    },
    {
        name: "Saturn",
        circumference: "1,430,000,000km",
        distanceFromSun: "365,000km",
    },
    {
        name: "Uranus",
        circumference: "2,880,000,000km",
        distanceFromSun: "160,000km",
    },
    {
        name: "Neptune",
        circumference: "4,500,000,000km",
        distanceFromSun: "154,000km",
    },
];

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

planets.forEach(addPlanetToPage);
