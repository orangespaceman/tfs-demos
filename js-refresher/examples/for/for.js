const timeElement = document.querySelector(".time");
timeElement.textContent = "";

for (let counter = 1; counter <= 10; counter++) {
    timeElement.textContent = timeElement.textContent + counter + ", ";
}