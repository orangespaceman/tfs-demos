// listen for the form being submitted
var inputForm = document.querySelector('form');
inputForm.addEventListener('submit', handleFormSubmit);

// handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  var inputTxt = document.querySelector('.txt');
  sayWords(inputTxt.value);
  inputTxt.value = '';
  inputTxt.focus();
}

// listen for clicks on the hello button
var sayHelloButton = document.querySelector('.say-hello');
sayHelloButton.addEventListener('click', sayHello);

function sayHello() {
  sayWords("Hello");
}

// listen for clicks on the something else button
var saySomethingElseButton = document.querySelector('.say-something-else');
saySomethingElseButton.addEventListener('click', saySomethingElse);

function saySomethingElse() {
  sayWords("Something else");
}

// say words!
function sayWords(words) {
  var utterThis = new SpeechSynthesisUtterance(words);
  var synth = window.speechSynthesis;
  synth.speak(utterThis);
}