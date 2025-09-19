function requestJoke() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new joke
            updateJoke(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// update the joke
function updateJoke(data) {
    // remove current joke
    var jokeElement = document.querySelector(".joke");
    while (jokeElement.firstChild) {
        jokeElement.removeChild(jokeElement.firstChild);
    }

    // add new joke
    var pElement = document.createElement("p");
    pElement.textContent = data.joke;
    jokeElement.appendChild(pElement);
}

// listen for clicks on the button
var updateButton = document.querySelector('.update');
updateButton.addEventListener("click", requestJoke);

// also update location on page load
requestJoke();
