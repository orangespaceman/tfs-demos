// Set date to count down to
var countDownDate = new Date("Sep 23, 2090 10:00").getTime();

// create a function to calcuate time until the event
function updateCountdown() {

  // Get today's date and time
  var now = new Date().getTime();

  // Calculate the difference (in seconds) between now and the count down date
  var differenceInMilliSeconds = countDownDate - now;
  var differenceInSeconds = differenceInMilliSeconds / 1000;

  // Calculation days, hours, minutes and seconds
  var days = Math.floor(differenceInSeconds / (60 * 60 * 24));
  var hours = Math.floor((differenceInSeconds % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((differenceInSeconds % (60 * 60)) / (60));
  var seconds = Math.floor((differenceInSeconds % 60));

  // Add result to page
  var countdownElement = document.querySelector(".countdown");
  countdownElement.innerText = days + " days, " + hours + " hours, "
  + minutes + " minutes, and " + seconds + " seconds to go!";

  // If the countdown isn't over, run again a second later
  if (differenceInSeconds > 0) {
    setTimeout(updateCountdown, 1000);
  }
}

// Run the countdown
updateCountdown();