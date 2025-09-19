// listen for the form being submitted
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', handleFormSubmit);

// handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const inputTxt = document.querySelector('.txt');
  sayWords(inputTxt.value);
  inputTxt.value = '';
  inputTxt.focus();
}

// listen for clicks on the hello button
const sayHelloButton = document.querySelector('.say-hello');
sayHelloButton.addEventListener('click', sayHello);

function sayHello() {
  sayWords("Hello");
}

// listen for clicks on the something else button
const saySomethingElseButton = document.querySelector('.say-something-else');
saySomethingElseButton.addEventListener('click', saySomethingElse);

function saySomethingElse() {
  sayWords("Something else");
}

// say words!
function sayWords(words) {
  const utterThis = new SpeechSynthesisUtterance(words);
  const synth = window.speechSynthesis;
  synth.speak(utterThis);
}