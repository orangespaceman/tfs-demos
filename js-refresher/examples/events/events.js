// remember how many times the counter has been clicked, we start from 0
let clickCounter = 0;

// functions to be used each time a button is clicked
function selectMercury() {
  const resultElement = document.querySelector(".result");
  resultElement.textContent = "Mercury";

  clickCounter = clickCounter + 1;
  const clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
}

function selectVenus() {
  const resultElement = document.querySelector(".result");
  resultElement.textContent = "Venus";

  clickCounter = clickCounter + 1;
  const clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
}

function selectEarth() {
  const resultElement = document.querySelector(".result");
  resultElement.textContent = "Earth";

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
