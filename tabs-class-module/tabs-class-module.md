# Tabs - class

We’re going to update the final [tabs](../tabs/tabs.md) example that we have seen previously.

If you haven't already created this, you might want to do that first.

This time we are going to update it to use a JavaScript class, and to make it a module.

There are advantages to this approach, the main one being it will allow us to reuse it multiple times in the same page without causing any conflicts.

As you run through the following steps, remember to test frequently in a browser to ensure it works as expected.

---

## HTML

First, we will adapt the HTML that we used for the previous tab example to make it more generic. Here was our previous HTML:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>What is your favourite planet?</title>
        <script defer src="events.js"></script>
        <link rel="stylesheet" href="exercises.css" />
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
        <div class="planet-details planet-details-Mercury">
            Mercury is the closest planet to the Sun
        </div>
        ...
    </body>
</html>
```

### Functional class names

There is nothing specifically *wrong* with this approach, but the class names are a mix of both the content ("e.g. planet") and the functionality.

Instead we're going to update our class names so that they relate more specifically to the functionality.

For example, we will use:

  - `tab-buttons` (rather than `planet-buttons`)
  - `tab-button` (rather than `planet-button`)
  - `tab-content` (rather than `planet-details`)
  - (etc)

This makes them generic enough that we could reuse them for different types of content.

We will also wrap the tabs HTML in a `<div>` element with a relevant name of `tab-block`. This will make it easier to locate in future if we wanted to duplicate it elsewhere.

We could use a naming convention such as BEM to be a bit more strict on our naming conventions, but for now this should be fine for our use-case.


### Data attributes

We're also going to give each `tab-button` element, and each `tab-content` element, a `data` attribute.

You might want to read up on what these are:
[https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

Here’s an example:

```html
<button class="tab-button currently-selected-tab" data-tab=”first-tab”>First tab</button>
<button class="tab-button" data-tab=”second-tab”>Second tab</button>
```

and:

```html
<div class="tab-content currently-selected-tab" data-tab-content=”first-tab”>
    …
</div>
<div class="tab-content" data-tab-content=”second-tab”>
    …
</div>
```

The reason for doing this is so that when a `tab-button` is clicked, we can find the related `tab-content` block to show/hide by matching up these data attributes.

Previously we were checking the content of the button and using that to find a matching class, which worked but it was a fairly crude solution.

Using a `data` attribute means we can change the text content of the `tab-button` without it affecting the functionality.


### Modules

We're going to update our JavaScript to use modules.

To do this, we need to update the `<script>` tag so that we tell the browser this will use modules, by adding the `type="module"` attribute:

```html
<script defer type="module" src="main.js"></script>
```



### 'final' HTML

Our `tabs.html` file should now look like this:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Planets of the solar system</title>
        <link rel="stylesheet" href="tabs.css" />
        <script defer type="module" src="main.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <header>
            <h1>Tabs! (class and module)</h1>
        </header>

        <div class="tab-block">
            <nav class="tab-buttons">
                <button data-tab="mercury" class="tab-button currently-selected-tab">Mercury</button>
                <button data-tab="venus" class="tab-button">Venus</button>
                <button data-tab="earth" class="tab-button">Earth</button>
            </nav>

            <article class="tab-contents">
                <div data-tab-content="mercury" class="tab-content currently-selected-tab">
                    <div class="tab-text">
                        <h2>Mercury</h2>
                        <p>
                            ...
                        </p>
                    </div>
                    <div class="tab-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg" alt="Mercury" />
                        <p>(photo caption)</p>
                    </div>
                </div>

                <div data-tab-content="venus" class="tab-content">
                    <div class="tab-text">
                        <h2>Venus</h2>
                        <p>
                            ...
                        </p>
                    </div>
                    <div class="tab-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg" alt="Venus" />
                        <p>(photo caption)</p>
                    </div>
                </div>

                <div data-tab-content="earth" class="tab-content">
                    <div class="tab-text">
                        <h2>Earth</h2>
                        <p>
                            ...
                        </p>

                    </div>
                    <div class="tab-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" alt="Earth" />
                        <p>(photo caption)</p>
                    </div>
                </div>
            </article>
        </div>

        <p>(All information borrowed from Wikipedia)</p>

    </body>
</html>
```

---

## CSS

We'll make similar changes to the CSS class names so that they are generic, but otherwise the CSS will be very similar to the previous tabs example.

This should be the contents of our `tabs.css` file:

```css
*,
*::after,
*::before {
    box-sizing: border-box;
}

/* page content */

html {
    background: #efefef;
    height: 100%;
}

body {
    font-family: Georgia, sans-serif;
    line-height: 1.5;
    max-width: 800px;
    min-height: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
}

header {
    margin-bottom: 30px;
}

img {
    max-width: 100%;
}

hr {
    margin: 50px;
}

/* tab buttons */

.tab-buttons {
    display: flex;
    border-bottom: 2px solid #81A4CD;
}

/* tab button */

.tab-button {
    cursor: pointer;
    background: none;
    font-size: 24px;
    padding: 10px;
    transition: all 300ms;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid #DBE4EE;
    border-bottom: none;
}

.tab-button:hover {
    background: #DBE4EE;
}

.tab-button.currently-selected-tab { /* class added/removed by JavaScript */
    border-color: #81A4CD;
    background: #81A4CD;
}

/* tab content */

.tab-content {
    font-size: 16px;
    display: none;
    align-items: flex-start;
    margin-bottom: 12px;
}

.tab-content.currently-selected-tab { /* class added/removed by JavaScript */
    display: flex;
}

.tab-text {
    flex: 2;
}

.tab-image {
    flex: 1;
    margin-top: 80px;
    margin-left: 20px;
}
```


---

## JS

This was our previous `tabs.js` JavaScript file:

```js
// add a listener to buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
    var clickedButton = event.currentTarget;

    // generate the class of the selected planet's details element
    // for example: ".planet-details-Venus" or ".planet-details-Earth"
    var detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

    // find this element
    var detailsElement = document.querySelector(detailsElementCssSelector);

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // remove selected state from all details elements
    var planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);

    // add selected state just to the clicked button
    detailsElement.classList.add("currently-selected-planet");
    clickedButton.classList.add("currently-selected-button");
}

function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}
```

We're going to do two things with it, turn it into a class, and turn it into a module.

We are also going to make the JS function and variable names more generic, for example:

- `planetButtonElements` will become `tabButtons`
- `planetDetailElements` will become `tabContents`
- `planetButtonClick` will become `tabClick`

We will also take advantage of arrow functions, so we can simplify some of our logic.

- `addPlanetButtonListener` will become an arrow function
- `updateClickedButtonState` will become an arrow function
- `updatePlanetDetailState` will become an arrow function


### Adding a class

We will be converting the tabs logic into a class so that it can be reused.

We'll be doing this in a file called `tabs.js`

First, we will add a `constructor` function where we pass in the class of the surrounding div, and find all the relevant elements:

```js
class Tabs {
    constructor(tabContainerSelector) {
        this.tabContainer = document.querySelector(tabContainerSelector);
    }
}
```

Next, we'll also select all of the elements we'll be using - we can get them when the class is first initialised, so we have them for future reference.

Note that the following examples replace the `constructor` defined above, they go within the `class` in the first example.

Our constructor should now look like this:

```js
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabButtons = this.tabsContainer.querySelectorAll('.tab-button');
        this.tabContents = this.tabsContainer.querySelectorAll('.tab-content');
    }
```

Finally, we can also add our event listener within the constructor.

This listens for clicks on the `tabButtons` elements, and calls a function when any of them is clicked.

We saw this logic in the original tabs exercise.

Here is the final function:

```js
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabButtons = this.tabsContainer.querySelectorAll('.tab-button');
        this.tabContents = this.tabsContainer.querySelectorAll('.tab-content');

        this.tabButtons.forEach(tabButton => {
            tabButton.addEventListener('click', (event) => this.tabClicked(event));
        });
    }
```

Now we need to add the `tabClicked` method referenced above.

This is very similar to what we've seen previously.

We start by identifying the HTML `tab-button` element that was clicked.

Note again that this should be added into the class, below the constructor:

```js
    tabClicked(event) {
        const clickedButton = event.currentTarget;
        console.log(clickedButton);
    }
```

If you run this you should now see in the console the button element that is being clicked each time.

We now need to identify the relevant `tab-content` block based on the `tab-button` that has been clicked.

Do you remember we added `data` attributes so we can match up the two?

First, we need to retrieve the `data-tab` attribute from the clicked button - we do that by referencing the `dataset` of the clicked button element:

```js
    tabClicked(event) {
        const clickedButton = event.currentTarget;
        const tabId = clickedButton.dataset.tab;
        console.log(tabId);
    }
```

Now we can use this value to locate the relevant `tab-content` element:


```js
    tabClicked(event) {
        const clickedButton = event.currentTarget;
        const tabId = clickedButton.dataset.tab;
        const detailsElement = this.tabsContainer.querySelector(`.tab-content[data-tab-content="${tabId}"]`);
        console.log(detailsElement);
    }
```

This should now identify the relevant element that we want to display.

The final step then is to hide all other elements, and show the selected one.

Our final method should look like this:

```js
tabClicked(event) {
    const clickedButton = event.currentTarget;
    const tabId = clickedButton.dataset.tab;
    const detailsElement = this.tabsContainer.querySelector(`.tab-content[data-tab-content="${tabId}"]`);

    this.tabButtons.forEach(button => {
        button.classList.remove('currently-selected-tab');
    });
    this.tabContents.forEach(content => {
        content.classList.remove('currently-selected-tab');
    });

    clickedButton.classList.add('currently-selected-tab');
    detailsElement.classList.add('currently-selected-tab');
}
```

We're almost done!


### Making it into a module

Finally, we want to turn this into a module.

All we need to do is add an `export` statement to the end of the file, where we define what we want to make available externally.

In this case, it's the class itself:

```js
export default Tabs;
```

Our final `tabs.js` file should look like this:

```js
class Tabs {
    constructor(selector) {
        this.tabsContainer = document.querySelector(selector);
        this.tabButtons = this.tabsContainer.querySelectorAll('.tab-button');
        this.tabContents = this.tabsContainer.querySelectorAll('.tab-content');

        this.tabButtons.forEach(tabButton => {
            tabButton.addEventListener('click', (event) => this.tabClicked(event));
        });
    }

    tabClicked(event) {
        const clickedButton = event.currentTarget;
        const tabId = clickedButton.dataset.tab;
        const detailsElement = this.tabsContainer.querySelector(`.tab-content[data-tab-content="${tabId}"]`);

        this.tabButtons.forEach(button => {
            button.classList.remove('currently-selected-tab');
        });
        this.tabContents.forEach(content => {
            content.classList.remove('currently-selected-tab');
        });

        clickedButton.classList.add('currently-selected-tab');
        detailsElement.classList.add('currently-selected-tab');
    }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs;
```


### Using the module

Note that in the HTML page above, we weren't importing the `tabs.js` directly, we were importing a file called `main.js`.

The exact name doesn't matter, but the idea here is that we could import one JS file into our HTML page, and then this is responsible for importing any other modules we want to use in our page.

In our case it's just the `tabs` file for now, so let's create a file called `main.js` and import it:

```js
import Tabs from "./tabs.js";
```

Now we can create an instance of our class:

```js
const tabs = new Tabs(“.tabs-block”)
```

That should be it!

Here is a working example:

- [tabs.html](./tabs/tabs.html)
- [tabs.css](./tabs/tabs.css)
- [main.js](./tabs/main.js)
- [tabs.js](./tabs/tabs.js)

---

## Creating multiple instances of the tabs:

You can confirm the class-based modular approach works by adding a second tabs block with a class of `“.tabs-block-2”` (or similar) and seeing if the two work independently of one another in the same page.

```html
<div class="tab-block tab-block-1">...</div>
<div class="tab-block tab-block-2">...</div>
```

Then in your `main.js` file you initialise both, referencing each of the two unique class names:

```js
import Tabs from "./tabs.js";

// create the first tab block
const tabs1 = new Tabs(".tab-block-1");

// create the second tab block
const tabs2 = new Tabs(".tab-block-2");
```

The `tabs.css` and `tabs.js` files remain the same:

- [tabs.html](./multiple-tabs/tabs.html)
- [tabs.css](./multiple-tabs/tabs.css)
- [main.js](./multiple-tabs/main.js)
- [tabs.js](./multiple-tabs/tabs.js)


---

## Creating tab variants

You could create different variants of the tabs, for example tabs that are at the top, left or right of the content.

The changes to the HTML are similar to the example above:

```html
<div class="tab-block tab-block-top tab-block-1">...</div>
<div class="tab-block tab-block-left tab-block-2">...</div>
<div class="tab-block tab-block-right tab-block-3">...</div>
```

The CSS can have different styles for each `tab-block` type, `top`, `left` and `right`.

(See the CSS link below, there are several small changes here.)

The JavaScript remains the same.

- [tabs.html](./tab-variants/tabs.html)
- [tabs.css](./tab-variants/tabs.css)
- [main.js](./tab-variants/main.js)
- [tabs.js](./tab-variants/tabs.js)

