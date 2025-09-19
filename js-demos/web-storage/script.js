// update content on page load based on any existing value
var favouritePlanet = localStorage.getItem('favouritePlanet');
updateTextContent(favouritePlanet);

// listen for the form being submitted
var planetForm = document.querySelector(".planet-form");
planetForm.addEventListener("submit", setFavouritePlanet);

function setFavouritePlanet(e) {
  // stop the form submission from refreshing the page
  e.preventDefault();

  // update store based on entered value
  var textInput = document.querySelector(".planet-input");
  var planet = textInput.value;
  store(planet);
}

// listen for the clear button being pressed
var clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearFavouritePlanet);

// clear the value
function clearFavouritePlanet() {
  clear();
}

function store(planet) {
  localStorage.setItem('favouritePlanet', planet, {expires: 2});
  updateTextContent(planet);
}

function clear() {
  localStorage.removeItem('favouritePlanet');
  updateTextContent();
}

function updateTextContent(planet) {
  var favouritePlanetElement = document.querySelector(".favourite-planet");
  if (planet) {
    favouritePlanetElement.textContent = "Your favourite planet is " + planet;
  } else {
    favouritePlanetElement.textContent = "I don't know what your favourite planet is yet...";
  }
}