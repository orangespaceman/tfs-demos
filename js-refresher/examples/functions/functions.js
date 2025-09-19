function addColourToPlanet(planetSelector, planetName, colour) {
    const planetElement = document.querySelector(planetSelector);
    planetElement.textContent = planetName;
    planetElement.classList.add(colour);
}

addColourToPlanet(".mercury", "Mercury", "orange");
addColourToPlanet(".venus", "Venus", "green");
addColourToPlanet(".earth", "Earth", "blue");