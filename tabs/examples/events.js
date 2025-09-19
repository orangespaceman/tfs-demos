// find all button elements
const planetButtonElements = document.querySelectorAll(".planet-button");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // update the result
    const resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // add selected state just to the clicked button
    clickedButton.classList.add("currently-selected-button");
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}
