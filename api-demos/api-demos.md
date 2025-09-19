# API Demos

We're going to request some data from APIs and display them in an HTML page.


## APIs

We know how to request data from an external source and display it in our web pages.

The advantage of this approach is that we can manage our data separately from the logic we write to build our websites. This is the basis for a clear split between backend and front-end.

We can also request data from other sources and display it in our web pages. There are many third-party services that offer data, accessible via an *API*.

When we request data from an external source, we won't know what content we'll be receiving. What we do know is the *structure* of that data.

When we look for external APIs, we'll see that they provide documentation that gives us the structure of their data, so that we know how to use it once we've loaded it.

Below there are examples of some external APIs - how to read about the information they offer, and how to write the JavaScript necessary to access them.

---

### ISS

This API can be used to find the current location of the International Space Station.

 - Home page: [https://wheretheiss.at](https://wheretheiss.at)
 - Documentation: [https://wheretheiss.at/w/developer](https://wheretheiss.at/w/developer)
 - **JSON URL:** `https://api.wheretheiss.at/v1/satellites/25544`
 - [Example web page](iss/)

Example response:

```json
{
    "name": "iss",
    "id": 25544,
    "latitude": 50.11496269845,
    "longitude": 118.07900427317,
    "altitude": 408.05526028199,
    "velocity": 27635.971970874,
    "visibility": "daylight",
    "footprint": 4446.1877699772,
    "timestamp": 1364069476,
    "daynum": 2456375.3411574,
    "solar_lat": 1.3327003598631,
    "solar_lon": 238.78610691196,
    "units": "kilometers"
}
```

Example HTML:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>ISS</title>
        <link rel="stylesheet" href="iss/style.css" />
        <script defer src="iss/script.js"></script>
    </head>
    <body>
        <h1>ISS</h1>
        <p><strong>Latitude:</strong> <em class="latitude"></em></p>
        <p><strong>Longitude:</strong> <em class="longitude"></em></p>
        <button class="update">Update ISS location</button>
    </body>
</html>
```

Example JavaScript:

```js
function requestISSLocation() {
    var apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new ISS location, update the page
            updateISSLocation(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// update the latitude and longitude displayed on the page
function updateISSLocation(data) {
    var latitudeElement = document.querySelector(".latitude");
    latitudeElement.textContent = data.latitude;

    var longitudeElement = document.querySelector(".longitude");
    longitudeElement.textContent = data.longitude;
}

// listen for clicks on the button
var updateButton = document.querySelector('.update');
updateButton.addEventListener("click", requestISSLocation);

// also update location on page load
requestISSLocation();
```

Ideas for further work:

- Automatically update the current location every minute seconds - use [`setTimeout()`]()
- Plot the location on a map

Source files:

 - [HTML](iss/index.html)
 - [CSS](iss/style.css)
 - [JS](iss/script.js)

---

### Dad jokes

This API can be used to display dad jokes...

 - Home page: [https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api)
 - **JSON URL:** `https://icanhazdadjoke.com/`
 - [Simple usage](dad-joke/)
 - [Styled usage](dan-joke/)

Response:

```json
{
    "id": "LRnGeVfiNe",
    "joke": "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
    "status": 200
}
```

Source files:

Dad Joke:

 - [HTML](dad-joke/index.html)
 - [CSS](dad-joke/style.css)
 - [JS](dad-joke/script.js)

Dan Joke:

 - [HTML](dan-joke/index.html)
 - [CSS](dan-joke/style.css)
 - [JS](dan-joke/script.js)

---

### Weather

This API can be used to display weather

 - Home page: [https://open-meteo.com/](https://open-meteo.com/)
 - Docs: [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)
 - **JSON URL:** `https://api.open-meteo.com/v1/forecast?latitude=50.815331&longitude=-0.136790&daily=temperature_2m_max,temperature_2m_min`
 - [Example web page](weather/)


Response:

```json
{
    "latitude": 50.82,
    "longitude": -0.120000124,
    "generationtime_ms": 0.07998943328857422,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 0,
    "daily_units": {
        "time": "iso8601",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "wind_speed_10m_max": "km/h",
        "precipitation_probability_mean": "%"
    },
    "daily": {
        "time": [
            "2024-04-14"
        ],
        "temperature_2m_max": [
            11.5
        ],
        "temperature_2m_min": [
            8.8
        ],
        "wind_speed_10m_max": [
            20.3
        ],
        "precipitation_probability_mean": [
            1
        ]
    }
}
```

Source files:

 - [HTML](weather/index.html)
 - [CSS](weather/style.css)
 - [JS](weather/script.js)

---

### Other APIs

These are just a few examples of public APIs that can be used.

There are *many* more. You can find some listed on the following websites:

   - [https://apilist.fun/](https://apilist.fun/)
   - [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

Note that each of the API examples given above has been integrated in a slightly different way - they will all need a certain amount of custom configuration to get them to work.
