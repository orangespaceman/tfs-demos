// no matter which planet is clicked, we want to do the same thing
// find the result HTML element that we'll be updating the text of
// and update it
function selectPlanet(planet) {
    const resultElement = document.querySelector(".result");
    resultElement.textContent = planet;

    incrementClickCounter();
}

// remember how many times the counter has been clicked, we start from 0
let clickCounter = 0;

// update the display of how many times the counter has been clicked
function incrementClickCounter() {
    clickCounter = clickCounter + 1;
    const clickElement = document.querySelector(".click-count");
    clickElement.textContent = clickCounter;
}

// add event listeners for each button
const mercuryButton = document.querySelector(".mercury");
mercuryButton.addEventListener("click", selectMercury);

const venusButton = document.querySelector(".venus");
venusButton.addEventListener("click", selectVenus);

const earthButton = document.querySelector(".earth");
earthButton.addEventListener("click", selectEarth);

// functions to be used each time a button is clicked
function selectMercury() {
    selectPlanet("Mercury");
}
function selectVenus() {
    selectPlanet("Venus");
}
function selectEarth() {
    selectPlanet("Earth");
}