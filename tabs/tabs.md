# Tabs

We're going to display a list of buttons, and show content for whichever one the user selects.

Create a folder, and within this create new `html`, `css` and `js` files:

 - `events.html`
 - `events.js`
 - `events.css`


Add some HTML:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>What is your favourite planet?</title>
        <script defer src="events.js"></script>
        <link rel="stylesheet" href="events.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>What is your favourite planet?</h1>
        <div class="planet-buttons">
            <button class="planet-button">Mercury</button>
            <button class="planet-button">Venus</button>
            <button class="planet-button">Earth</button>
            <button class="planet-button">Mars</button>
            <button class="planet-button">Jupiter</button>
            <button class="planet-button">Saturn</button>
            <button class="planet-button">Uranus</button>
            <button class="planet-button">Neptune</button>
        </div>
        <p class="result"></p>
    </body>
</html>
```

Add some CSS:

```css
.planet {
    font-size: 24px;
    margin-bottom: 12px;
    text-shadow: 2px 2px 2px green;
}

.orange {
    color: orange;
}

.green {
    color: green;
}

.blue {
    color: blue;
}

button {
    margin: 5px;
    padding: 10px;
}

.currently-selected-button {
    background: black;
    color: orange;
}

.planet-details {
    display: none;
    margin: 5px;
    padding: 10px;
    font-size: 24px;
    margin-bottom: 12px;
    text-shadow: 2px 2px 2px green;
}

.currently-selected-planet {
    display: block;
}
```

Open the HTML file in a web browser.

Remember to open the console so that you can spot any errors.

Now open the JavaScript file `events.js` and enter the following code:

```js
// find all button elements
const planetButtonElements = document.querySelectorAll(".planet-button");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // for now, just alert the answer
    // (you'll change this line in a minute!)
    alert("You clicked " + clickedButton.textContent);
}
```

Refresh the web page in your browser.

Click a button. Do you see an alert with the name of the planet?

Once you have this working, there are two further additions we can make to this JavaScript to make it useful.


### Displaying the text of the selected button

First, we can display the text from the selected button in the page, rather than in an alert (which becomes annoying very quickly).

In order to do so, we need to use the `document.querySelector()` function to select the HTML `<p class="result></p>` element that we have already added to the HTML page. We are going to store a reference to this HTML element in a variable called `resultElement`.

We can then use `resultElement.textContent` to set the value of this HTML element to the text content of the selected button.

We want this logic to run when someone clicks the button, so we add it to the `planetButtonClick` function.

```js
// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // replace the 'alert' with the code below, to update the page

    // update the result
    const resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;
}
```

Try this and see if it works.


### Updating the class of the selected button

As well as updating the text of the result element, we can also update the `class` of the selected button to indicate that it has been clicked:

```js
// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // update the result
    const resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;

    // add the selected state just to button that was clicked
    clickedButton.classList.add("currently-selected-button");
}
```

Try it in a browser and see how it works.

Click a few buttons.

Do you see a problem?


### Updating the class of the buttons that *haven't* been selected

The above example works, but it doesn't automatically deselect buttons that have been clicked in the past.

To do this, when a button has been clicked we first need to loop through all buttons and remove any prior clicked state *before* we then set the clicked state on the selected button:

```js
// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // update the result
    const resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // add selected state just to the clicked button
    clickedButton.classList.add("currently-selected-button");
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}
```

Note that we need to remove the old class *before* we add it to the button that has just been clicked - if we tried to remove the clicked state afterwards we'd be adding the class and then immediately removing it again.


If you get stuck, example files can be found here:

 - [events.html](examples/events.html)
 - [events.css](examples/events.css)
 - [events.js](examples/events.js)

---

The example above demonstrates how you can update the text of an HTML element based on the click of a button.

This example could be extended further to show or hide an entire block of content based on the selected button.

Create new `html` and `js` files:

 - `text.html`
 - `text.js`
 - `text.css`

Add some HTML:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Planets of the solar system</title>
        <link rel="stylesheet" href="text.css" />
        <script defer src="text.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>Click on a planet to see a fact!</h1>
        <div class="planet-buttons">
            <button class="planet-button">Mercury</button>
            <button class="planet-button">Venus</button>
            <button class="planet-button">Earth</button>
        </div>

        <div class="planet-details planet-details-Mercury">
            Mercury is the closest planet to the Sun
        </div>

        <div class="planet-details planet-details-Venus">
            A day is longer than a year on Venus
        </div>

        <div class="planet-details planet-details-Earth">
            Earth has life!
        </div>
    </body>
</html>
```

Add some CSS:

```css
.planet {
    font-size: 24px;
    margin-bottom: 12px;
    text-shadow: 2px 2px 2px green;
}

.orange {
    color: orange;
}

.green {
    color: green;
}

.blue {
    color: blue;
}

button {
    margin: 5px;
    padding: 10px;
}

.currently-selected-button {
    background: black;
    color: orange;
}

.planet-details {
    display: none;
    margin: 5px;
    padding: 10px;
    font-size: 24px;
    margin-bottom: 12px;
    text-shadow: 2px 2px 2px green;
}

.currently-selected-planet {
    display: block;
}
```

Open the HTML page in a web browser.

You should see that the three `<div class="planet-details"></div>` blocks have been hidden with CSS when the page loads.

Now we want to write some JavaScript that detects a click on each button.

When a button is clicked, we want to select the corresponding detail block and display it, hiding the others.

The JavaScript will look similar to what we have written previously:

```js
// find all planet buttons
const planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener for each button
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// when a button has been clicked, show its content
function planetButtonClick(event) {
    const clickedButton = event.currentTarget;

    // the rest of the code will go here...
}
```

First, we want to generate the class of the selected planet's details element.

For example, if the user clicks on the 'Venus' button we want to select the HTML element with the class `planet-details-Venus`:

```js
// generate the class of the selected planet's details element
// for example: ".planet-details-Venus" or ".planet-details-Earth"
const detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;
```

We then want to find the HTML element with this `class`:

```js
// find this element
const detailsElement = document.querySelector(detailsElementCssSelector);
```

Like in the previous example, we want to remove the selected state from all other detail elements before we display this one:

```js
// remove selected state from all details elements
const planetDetailElements = document.querySelectorAll(".planet-details");
planetDetailElements.forEach(updatePlanetDetailState);
```

Finally, we can display the selected detail element:

```js
// add selected state just to the clicked button
detailsElement.classList.add("currently-selected-planet");
```

Don't forget you'll need to create the `updatePlanetDetailState` function too:

```js
function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}
```

Refresh the page, has it worked?

If you get it working, try adding extras:

 - Add a class to the selected button too, so the user can easily see which planet has been selected each time
 - Add images into each of the HTML blocks.
 - Add a new button and new content for Mars.

If you get stuck, example files can be found here:

 - [text.html](examples/text.html)
 - [text.css](examples/text.css)
 - [text.js](examples/text.js)


### Tabs!

We now know how to create tabbed content.

Here's an example page, you'll see the JavaScript is *exactly* the same as for the exercise above, only the HTML and CSS has changed.

 - [tabs.html](examples/tabs.html)
 - [tabs.css](examples/tabs.css)
 - [tabs.js](examples/tabs.js)
