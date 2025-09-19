// add a listener to buttons
const planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
    const clickedButton = event.currentTarget;

    // generate the class of the selected planet's details element
    // for example: ".planet-details-Venus" or ".planet-details-Earth"
    const detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

    // find this element
    const detailsElement = document.querySelector(detailsElementCssSelector);

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // remove selected state from all details elements
    const planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);

    // add selected state just to the clicked button
    detailsElement.classList.add("currently-selected-planet");
    clickedButton.classList.add("currently-selected-button");

    // update the log
    updateLog(clickedButton.textContent);
}

function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}

function updateLog(planetName) {
    const timeNow = new Date().toUTCString();

    const newListElement = document.createElement("li");
    newListElement.classList.add("log-item");
    newListElement.textContent = timeNow + ": " + planetName + " clicked";

    const logElement = document.querySelector(".log");
    logElement.appendChild(newListElement);
}