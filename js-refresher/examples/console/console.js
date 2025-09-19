// Part 1

const nearestStar = "Alpha Centauri";
const lightYearsAway = 4.3;
const age = 6000000000;
const isHot = true;

console.log(nearestStar); // "Alpha Centauri"

// Part 2

const planets = 8;
const dwarfPlanets = 5;

const planetCount = planets + dwarfPlanets;
console.log(planetCount); // 13

// Part 3

let numberOfPlanets = 9;

numberOfPlanets = numberOfPlanets - 1;
console.log(planetCount); // 8 - bye bye Pluto

// Part 4

const planet = "Earth";
console.log(planet); // Earth

// Part 5

const city = "London";
const country = "England";

const address = city + country;
console.log(address); // "LondonEngland"

// Part 6

const newAddress = city + ", " + country;
console.log(newAddress); // "London, England"

// Part 7

const firstNumber = 10;
const secondNumber = 2;

console.log(firstNumber + secondNumber); // 10 + 2 === 12
console.log(firstNumber - secondNumber); // 10 - 2 === 8
console.log(firstNumber * secondNumber); // 10 * 2 === 20
console.log(firstNumber / secondNumber); // 10 / 2 === 5

// Part 8

const number = 10;

console.log(number === 1);  // false
console.log(number !== 1);  // true
console.log(number > 10);   // false
console.log(number >= 10);  // true
console.log(number < 10);   // false
console.log(number <= 10);  // true

// Part 9

// remember we set the value of planet earlier when we set:
// const planet = "Earth";

// Test the value of our variable
if (planet === "Earth") {
  console.log("We are on Earth, enjoy!");
}

// Part 10

if (planet !== "Earth") {
  console.log("We are not on Earth, I hope you can hold your breath!");
}

// Part 11

if (planet === "Earth") {
  console.log("Enjoy the sunset");

} else {
  console.log("Beware the sunset!");
}

// Part 12

if (planet === "Earth") {
  console.log("Nice weather");

} else if (planet === "Mars") {
  console.log("Bit cold out");

} else if (planet === "Venus") {
  console.log("Bit hot out");

} else {
  console.log("Where am I?");
}

// Part 13

const time = "Lunchtime";

// do something if the planet is Earth AND it's lunch time
if (planet === "Earth" && time === "Lunchtime") {
    console.log("Lunchtime on earth, falafel time!");

// it's either not Earth, or it isn't lunch time yet...
} else {
    console.log("I'm hungry...");
}

// Part 14

// do something if the planet is Mercury OR if the planet is Venus
if (planet === "Mercury" || planet === "Venus") {
  console.log("Take your coat off, it's hot out");

} else if (planet === "Earth") {
  console.log("Ah, just right");

} else {
  console.log("You might need an extra layer");
}

// Part 15

// set a variable (in millions of miles)
const distanceFromSun = 93;

if (distanceFromSun <= 90) {
    console.log("Bit hot out");

} else if (distanceFromSun > 90 &&  distanceFromSun <= 95) {
    console.log("Perfect weather");

} else {
    console.log("Bit cold out");
}