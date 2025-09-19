# Filtered data

We're going to display structured information about the planets, and dynamically filter it using JavaScript.


Create a new folder, and in it create new `html`, `css`, `json` and `js` files:

 - `structured-data.html`
 - `structured-data.js`
 - `structured-data.json`
 - `structured-data.css`

Add some CSS:

```css
.planet {
  border: 2px solid black;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  padding: 10px;
  margin: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

p {
  margin: 0;
}

.planet-name {
  font-weight: bold;
  font-size: 24px;
}

.planet-circumference,
.planet-distance {
  font-style: italic;
}

.planet-Earth {
  background: green;
}

.planet-Mars {
  background: red;
}

.search {
  padding: 10px;
  font-size: 16px;
}

.hide {
  display: none;
}
```

Open the HTML file in a web browser.

Remember to open the console so that you can spot any errors.

Add some HTML:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Planets of the solar system</title>
        <link rel="stylesheet" href="structured-data.css" />
        <script defer src="structured-data.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>Planets of the solar system</h1>
        <div class="planets"></div>
    </body>
</html>
```

Open up the JSON file. We want to add information about each planet:

```js
[
    {
        "name": "Mercury",
        "circumference": "2,500 km",
        "distanceFromSun": "57,000,000 km"
    },
    {
        "name": "Venus",
        "circumference": "28,000 km",
        "distanceFromSun": "108,000,000 km"
    },
    {
        "name": "Earth",
        "circumference": "40,000 km",
        "distanceFromSun": "150,000,000 km"
    },
    {
        "name": "Mars",
        "circumference": "227,000,000km",
        "distanceFromSun": "21,000km"
    },
    {
        "name": "Jupiter",
        "circumference": "779,000,000km",
        "distanceFromSun": "440,000km"
    },
    {
        "name": "Saturn",
        "circumference": "1,430,000,000km",
        "distanceFromSun": "365,000km"
    },
    {
        "name": "Uranus",
        "circumference": "2,880,000,000km",
        "distanceFromSun": "160,000km"
    },
    {
        "name": "Neptune",
        "circumference": "4,500,000,000km",
        "distanceFromSun": "154,000km"
    }
]
```


Now that we have some data, we need to load that information into our JavaScript. Add the following code to your JavaScript file:

```js
function requestData() {
    const dataUrl = "structured-data.json";

    fetch(dataUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // we will add a foreach loop to add content to our page here
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// request data on page load
requestData();
```

Load the page and check the console to see if the data loads as expected.

If so, we can add a new function to the bottom of the file, that will be used to add each planet to the page:

```js
function addPlanetToPage(planet) {
    // create a div element for the planet
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet");
    planetElement.classList.add("planet-" + planet.name);

    // add the planet name
    const planetName = document.createElement("p");
    planetName.classList.add("planet-name");
    planetName.textContent = planet.name;
    planetElement.appendChild(planetName);

    // add the planet to the page
    const planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}
```

We can loop through every planet object in the `data` array that was contained in the JSON file by adding this after we use `console.log` to show the data:

```js
data.forEach(addPlanetToPage);
```

Refresh the page, has it worked? If not, look in the browser console to see if there are any errors.

Now that we have the planet name appearing, we also want to add the details about the planet.

For example, to add the circumference data beneath the planet name, add the following code inside the `addPlanetToPage` function:

```js
    // add other planet details
    const planetCircumference = document.createElement("p");
    planetCircumference.classList.add("planet-circumference");
    planetCircumference.textContent = "Circumference: " + planet.circumference;
    planetElement.appendChild(planetCircumference);
```

Note that it's important where you add this code. It should be added after you've added the planet name.

Once you have this working, try to also add the planet's distance from the sun to the page.


### Additional tasks

 - Earth is green, the other planets don't currently have a background colour. See if you can work out how to add some CSS styles to colour the other planets. Maybe change their sizes too.

If you get stuck, example files can be found here:

 - [structured-data.html](examples/structured-data.html)
 - [structured-data.js](examples/structured-data.js)
 - [structured-data.json](examples/structured-data.json)
 - [structured-data.css](examples/structured-data.css)


---

## Filtering content

We can also filter this information. This allows us to dynamically display data only if it meets certain conditions.

We're going to show and hide our structured information about the planets, depending on what search term someone enters into a form input.

create new `html`, `css`, `json` and `js` files:

 - `filter.html`
 - `filter.css`
 - `filter.js`
 - `filter.json`

First, copy across the HTML, CSS, JSON and JavaScript from the previous examples. Note that in the HTML file you need to update the references to the CSS and JS files to point to these new files you've just created (e.g. change `structured-data.js` to `filter.js` and `structured-data.css` to `filter.css`).

These are the updates we then need to make:


### HTML

We need to add an HTML form with a text input field. When someone adds text, we will only display planet information if the name of the planet matches the text that has been entered.

We start with adding a text input field to the HTML page, put this above the `<div class="planets"></div>` element:

```html
<label>
    Search planets:
    <input type="text" name="search" class="search" placeholder="Enter words to search for" />
</label>
```

### JavaScript

Now we need to update the JavaScript.

The following code should sit below the code you copied over from the previous example.

First we add JavaScript to 'listen' for text being entered into the HTML form we just created:

```js
// listen to changes in the search form
const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
let searchValue = "";

// check what search term has been entered
function updateSearchValue() {
    // trim() removes any spaces before/after the input
    // toLowerCase() makes the entered text lowercase
    searchValue = searchInput.value.trim().toLowerCase();

    console.log("You searched for: " + searchValue);

    // you will add some more code here shortly...
}
```

This will set the value of the variable `searchValue` to whatever text has been entered into the form.

Now we need to update each of the planet elements when this text changes.

Add the following inside the `updateSearchValue()` function:

```js
    // loop through all planet elements
    // show or hide each one based on the search term
    const planetElements = document.querySelectorAll(".planet");
    planetElements.forEach(showOrHidePlanet);
```

Now we need to create this function that will show or hide each planet:

```js
// every time the text field changes, run this
function showOrHidePlanet(planetElement) {
    // you will add some code here shortly
}
```

First we want to check if a search term has been added. If no search term has been added we should show every planet.

Add this into the `showOrHidePlanet()` function:

```js
    // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");
    } else {
        // you will add code here shortly
    }
```

If a search term *has* been added, we want to filter and only show planets if the names match.

Note that the first few lines here are what we just entered - we're adding the `else` statement here to filter based on planet names.

```js
    // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");

    // if a search term has been set,
    // only display the planet if its name matches the search term
    } else {

        // get the name of the planet from its planet-name element
        const planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
        if (planetName.includes(searchValue)) {
            planetElement.classList.remove("hide");
        } else {
            planetElement.classList.add("hide");
        }
    }
```

If you get stuck, example files can be found here:

 - [filter.html](examples/filter.html)
 - [filter.js](examples/filter.js)
 - [filter.json](examples/filter.json)
 - [filter.css](examples/filter.css)

---

## Filter buttons

We can extend this further, adding buttons that allow us to filter based on pre-selected options.

This will use extended data, e.g. with added details about moons and life - see the example files at the end of this page. This is an example, here is the Earth object from the array:

```json
{
    "name": "Earth",
    "class": "earth",
    "circumference": "40,000 km",
    "distanceFromSun": "150,000,000 km",
    "hasLife": true,
    "majorMoons": ["The moon"],
    "atmosphere": ["Nitrogen", "Oxygen"],
    "url": "https://en.wikipedia.org/wiki/Earth",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
},
```
The HTML contains an input field for search, and also buttons for different types of atmosphere:

```html
<label>
    Search planets:
    <input type="text" name="search" class="search" placeholder="Enter words to search for" />
</label>
<div class="atmosphere-buttons">
    Filter planets by atmosphere:
    <button class="atmosphere-button currently-selected-button">All</button>
    <button class="atmosphere-button">Carbon Dioxide</button>
    <button class="atmosphere-button">Oxygen</button>
    <button class="atmosphere-button">Hydrogen</button>
</div>
```

The JavaScript is similar to what we used previously.

There are a few new pieces of functionality, such as turning the array of `atmosphere` values into a single string using `.join()`:

```js
// Atmosphere
const planetAtmosphere = document.createElement("p");
planetAtmosphere.classList.add("planet-atmosphere");
if (planet.atmosphere.length > 0) {
    planetAtmosphere.textContent = "Atmosphere: " + planet.atmosphere.join(', ');
} else {
    planetAtmosphere.textContent = "No atmosphere";
}
planetElement.appendChild(planetAtmosphere);
```

There are two sets of event listeners in the JavaScript:

 - One listener for detecting when text is entered in the search field
 - Another set of listeners for detecting when any of the buttons are clicked

When any of these events occur, the search terms are updated, and then all planets are checked to see whether they should be shown or hidden.

 - [Example HTML](./examples/filter-buttons.html)
 - [Example CSS](./examples/filter-buttons.css)
 - [Example JS](./examples/filter-buttons.js)
 - [Example JS](./examples/filter-buttons.json)

