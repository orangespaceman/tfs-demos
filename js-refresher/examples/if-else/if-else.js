const seconds = new Date().getSeconds();
console.log(seconds);

const timeElement = document.querySelector(".time");
timeElement.textContent = seconds;

if (seconds <= 20) {

    console.log("Make it orange!");
    timeElement.classList.add("orange");

} else if (seconds > 20 && seconds < 40) {

    console.log("Make it blue!");
    timeElement.classList.add("blue");

} else {

    console.log("Make it green!");
    timeElement.classList.add("green");

}