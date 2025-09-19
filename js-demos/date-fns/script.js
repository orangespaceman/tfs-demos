// find the date inputs
const date1Element = document.querySelector('input[name="date-1"]');
const date2Element = document.querySelector('input[name="date-2"]');

// run the function when either date changes
date1Element.addEventListener("change", calculateDistance);
date2Element.addEventListener("change", calculateDistance);

function calculateDistance() {
  
  // use the date-fns library to calculate distance between two dates
  // https://date-fns.org/v3.6.0/docs/formatDistance
  const result = dateFns.formatDistance(
    new Date(date1Element.value),
    new Date(date2Element.value),
    { includeSeconds: true }
  )

  // add result to page
  const resultElement = document.querySelector('.result');
  resultElement.textContent = result;
  console.log(result);
}

// run on page load too
calculateDistance();