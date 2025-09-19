const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Nepture',
    'Uranus'
];

function addPlanetToPage(planetName) {
    const planetElement = document.createElement("li");
    planetElement.classList.add("planet");
    planetElement.textContent = planetName;

    const planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}

planets.forEach(addPlanetToPage);

// add planet count
const planetCountElement = document.querySelector(".planet-count");
planetCountElement.textContent = planets.length;