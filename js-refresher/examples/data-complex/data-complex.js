fetch('data-complex.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(addPlanetToPage);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


function addPlanetToPage(planet) {
    // create a new element for each planet
    const planetElement = document.createElement("a");
    planetElement.href = planet.url;
    planetElement.classList.add("planet");
    planetElement.classList.add("planet-" + planet.class);

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

    // add planet image
    const planetImage = document.createElement("img");
    planetImage.classList.add("planet-image");
    planetImage.src = planet.image;
    planetImage.alt = "A photograph of the planet " + planet.name;
    planetElement.appendChild(planetImage);

    // add planet link
    // const planetLink = document.createElement("a");
    // planetLink.classList.add("planet-link");
    // planetLink.href = planet.url;
    // planetLink.textContent = "Read more about " + planet.name;
    // planetElement.appendChild(planetLink);

    // add the planet to the page
    const planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}
