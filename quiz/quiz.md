# Quiz

We're going to create a quiz using HTML, CSS and JavaScript.


Create a new folder, and in it create new `html`, `css`, and `js` files:

 - `quiz.html`
 - `quiz.js`
 - `quiz.css`


### Quiz - HTML

First, we need to create the HTML form for people to interact with.

We have seen how to use HTML form elements, these can be used for a quiz.

For example to create a list of radio buttons:

```html
<p>Question 1. Which planet has rings?</p>
<label>
    <input type="radio" name="question-1" value="Saturn">
    Saturn
</label>
<label>
    <input type="radio" name="question-1" value="Mercury">
    Mercury
</label>
<label>
    <input type="radio" name="question-1" value="Mars">
    Mars
</label>
```
This would generate the following form:

>
> <p>Question 1. Which planet has rings?</p>
<label>
    <input type="radio" name="question-1" value="Saturn">
    Saturn
</label>
<label>
    <input type="radio" name="question-1" value="Mercury">
    Mercury
</label>
<label>
    <input type="radio" name="question-1" value="Mars">
    Mars
</label>
>

---

To create an HTML select input:

```html
<p>Question 2. What is the closest planet to the sun?</p>
<select name="question-2">
    <option></option>
    <option>Saturn</option>
    <option>Mercury</option>
    <option>Mars</option>
</select>
```

This would generate:

>
> <p>Question 2. What is the closest planet to the sun?</p>
<select name="question-2">
    <option></option>
    <option>Saturn</option>
    <option>Mercury</option>
    <option>Mars</option>
</select>
>

---

To create an HTML text input:

```html
<p>Question 3. Which planet has life?</p>
<input type="text" name="question-3" value="">
```

This would generate:

>
> <p>Question 3. Which planet has life?</p>
<input type="text" name="question-3" value="">
>

---

For a submit button:

```html
<button>Go!</button>
```

This would generate:

>
> <button class="quiz-submit">Go!</button>
>

---

You could use a combination of the form elements above to create the questions for your quiz.

When someone finishes answering the questions and submits the form, we will want to check their answers against the correct answers, and show the result.

We've seen how to show and hide HTML elements, so we could create a different results element for each possible score, for example:

```html
<div class="quiz-result quiz-result-0">You answered 0 questions correctly</div>
<div class="quiz-result quiz-result-1">You answered 1 question correctly</div>
<div class="quiz-result quiz-result-2">You answered 2 questions correctly</div>
<div class="quiz-result quiz-result-3">You answered 3 questions correctly</div>
```

We would hide all of the above results by default with CSS, and then only show the relevant one for the correct score once we've worked out how many questions the user has answered correctly.

---

Here is an example of an HTML page that contains a quiz form with three quiz questions - you could copy this into your `quiz.html` file:

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Quiz</title>
        <link rel="stylesheet" href="quiz.css" />
        <script defer src="quiz.js"></script>
    </head>
    <body>

        <h1>Quiz</h1>

        <form class="quiz">
            <div class="quiz-row">
                <p class="quiz-question">Question 1. Which planet has rings?</p>
                <div class="quiz-answers">
                    <label class="quiz-answer">
                        <input type="radio" name="question-1" value="Saturn" class="quiz-answer-radio">
                        Saturn
                    </label>
                </div>
                <div class="quiz-answers">
                    <label class="quiz-answer">
                        <input type="radio" name="question-1" value="Mercury" class="quiz-answer-radio">
                        Mercury
                    </label>
                </div>
                <div class="quiz-answers">
                    <label class="quiz-answer">
                        <input type="radio" name="question-1" value="Mars" class="quiz-answer-radio">
                        Mars
                    </label>
                </div>
            </div>

            <div class="quiz-row">
                <p class="quiz-question">Question 2. What is the closest planet to the sun?</p>
                <div class="quiz-answers">
                    <label class="quiz-answer">
                        <select name="question-2" class="quiz-answer-select">
                            <option></option>
                            <option>Saturn</option>
                            <option>Mercury</option>
                            <option>Mars</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="quiz-row">
                <p class="quiz-question">Question 3. Which planet has life?</p>
                <div class="quiz-answers">
                    <label class="quiz-answer">
                        <input type="text" name="question-3" value="" class="quiz-answer-text">
                    </label>
                </div>
            </div>

            <div class="quiz-buttons">
                <button type="button" class="quiz-submit">Go!</button>
                <button type="button" class="quiz-reset">Reset</button>
            </div>
        </form>

        <div class="quiz-results">
            <div class="quiz-result quiz-result-3">
                <h2 class="quiz-result-title">Well done, you answered all three questions correctly!</h2>
                <p class="quiz-result-text">You really know your space</p>
            </div>
            <div class="quiz-result quiz-result-2">
                <h2 class="quiz-result-title">Well done, you answered two questions correctly!</h2>
                <p class="quiz-result-text">You know some things about space</p>
            </div>
            <div class="quiz-result quiz-result-1">
                <h2 class="quiz-result-title">You answered one question correctly</h2>
                <p class="quiz-result-text">Not bad...</p>
            </div>
            <div class="quiz-result quiz-result-0">
                <h2 class="quiz-result-title">Oh dear, you got all questions wrong!</h2>
                <p class="quiz-result-text">Better luck next time!</p>
            </div>
        </div>

    </body>
</html>
```


---

### Quiz - CSS

We could add CSS to style the different form elements, but actually the only CSS we need to add initially is to hide the score elements we just created:

```css
/* hide all scores when the page loads */
.quiz-result {
    display: none;
}
```

When someone submits the form, we'll use JavaScript to check their answers and work out which of the scores to display. We'll do this by adding a class of `show` to the relevant score element:

```css
/* show only the correct score
note that the extra class "show" will be added dynamically by JavaScript */
.quiz-result.show {
    display: block;
}
```
<br>
---

Here is an example of a CSS file that would style the HTML we saw above, you could copy this into your `quiz.css` file:

```css
.quiz {
    background: lavender;
    padding: 10px;
}

.quiz-row {
    border-bottom: 2px solid black;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
}

.quiz-question {
    font-size: 18px;
    font-weight: bold;
}

.quiz-answer {
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
}

.quiz-answer-select {
    font-size: 18px;
}

.quiz-answer-text {
    font-size: 18px;
    padding: 10px;
}

.quiz-submit {
    padding: 20px 50px;
    background: orange;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    margin-right: 20px;
}

.quiz-reset {
    padding: 20px 50px;
    background: lightgrey;
    border: none;
    cursor: pointer;
    color: black;
    font-size: 20px;
}

.quiz-result {
    display: none;
}

.quiz-result.show {
    display: block;
}
```

---

### Quiz - JavaScript

Now that we have created our HTML form and learnt how to style it, we want to check the answers that have been submitted.

The first thing we need to do is find our form submit buttons and add *event listeners* so we know when they have been clicked:

```js
const quizSubmitButton = document.querySelector(".quiz-submit");
quizSubmitButton.addEventListener("click", checkQuizAnswers);

function checkQuizAnswers(e) {
    // we'll add code here shortly...
}
```
The example above will call the function `checkQuizAnswers();` every time someone clicks the button. So we want to write our quiz-checking logic inside this function.

***Note that all of the following code examples should be added to the end of the `checkQuizAnswers()` function.***

Next, we're going to start calculating the user's quiz score. We start by creating a variable to remember their scopre, and also assuming they haven't got any questions correct yet.

```js
    // keep track of the current quiz score
    let score = 0;
```

Now we need to check the answers submitted for each quiz question. For example, if the question was a choice of radio buttons we need to work out which one was selected, and check the submitted answer against the answer we were expecting. If they got it correct, we increment the score:

```js
    // find the submitted answers:
    // question 1 is several radio inputs, so find the selected one
    // it may be that someone clicked submit without selecting a radio button,
    // so we need to see if one has been selected, and if so what its value is
    const question1 = document.querySelector("input[name=question-1]:checked");
    if (question1 && question1.value === "Saturn") {
        score = score + 1;
    }
```

This is how we would check the answer if the form input were a select dropdown list rather than a set of radio buttons:

```js
    // question 2 is a select dropdown element, so find the selected option
    const question2 = document.querySelector("select[name=question-2]").value;
    if (question2 === "Mercury") {
        score = score + 1;
    }
```

And this is how we would check the answer if the form input were a text input field. Note that because this is a text entry field we're allowing people to use *UPPERCASE* or *lowercase* letters, and also trimming any extra spaces they may have entered:

```js
    // question 3 is a text input
    // because this is a text entry field, allow people to use a capital or
    // lower-case, e.g. they can enter "Earth" or "earth"
    // also remove any spaces before or after, so they can enter " earth "
    const question3 = document.querySelector("input[name=question-3]").value;
    if (question3.trim().toLowerCase() === "earth") {
        score = score + 1;
    }
```

We now know what score our user has, it may be 0, 1, 2 or 3. (Yours will be different if you have more questions.) We want to display the correct results block based on their score:

```js
    // find the relevant quiz results block to display, based on their score
    const quizResultsBlock = document.querySelector(".quiz-result-" + score);
    quizResultsBlock.classList.add("show");
```


---

Here is our final JavaScript file that you could copy into `quiz.js` - note that it has a few extra steps, such as allowing the form to be reset so that the quiz can be attempted multiple times.

```js
// add listeners for the quiz buttons
const quizSubmitButton = document.querySelector(".quiz-submit");
quizSubmitButton.addEventListener("click", checkQuizAnswers);

const quizResetButton = document.querySelector(".quiz-reset");
quizResetButton.addEventListener("click", resetQuiz);


function checkQuizAnswers(e) {
    // stop the form submission refreshing the page, which is the default
    // behaviour when someone submits an HTML form
    e.preventDefault();

    // keep track of the current quiz score
    let score = 0;

    // find the submitted answers:
    // question 1 is several radio inputs, so find the selected one
    // it may be that someone clicked submit without selecting a radio button,
    // so we need to see if one has been selected, and if so what its value is
    const question1 = document.querySelector("input[name=question-1]:checked");
    if (question1 && question1.value === "Saturn") {
        score = score + 1;
    }

    // question 2 is a select dropdown element, so find the selected option
    const question2 = document.querySelector("select[name=question-2]").value;
    if (question2 === "Mercury") {
        score = score + 1;
    }

    // question 3 is a text input
    // because this is a text entry field, allow people to use a capital or
    // lower-case, e.g. they can enter "Earth" or "earth"
    // also remove any spaces before or after, so they can enter " earth "
    const question3 = document.querySelector("input[name=question-3]").value;
    if (question3.trim().toLowerCase() === "earth") {
        score = score + 1;
    }

    // hide the quiz results block if it is currently shown
    const quizResultsBlock = document.querySelector(".quiz-result.show");
    if (quizResultsBlock) {
        quizResultsBlock.classList.remove("show");
    }

    // find the relevant quiz results block to display, based on their score
    const quizResultsBlock = document.querySelector(".quiz-result-" + score);
    quizResultsBlock.classList.add("show");
}


function resetQuiz(e) {
    // stop the form submission refreshing the page, which is the default
    // behaviour when someone submits an HTML form
    e.preventDefault();

    // hide the quiz results block if it is currently shown
    const quizResultsBlock = document.querySelector(".quiz-result.show");
    if (quizResultsBlock) {
        quizResultsBlock.classList.remove("show");
    }

    // reset the first question - deselect the radio input if one is selected
    const question1 = document.querySelector("input[name=question-1]:checked");
    if (question1) {
        question1.checked = false;
    }

    // reset the second question - the select input
    const question2 = document.querySelector("select[name=question-2]");
    question2.value = "";

    // reset the third question - the text input
    const question3 = document.querySelector("input[name=question-3]")
    question3.value = "";
}
```

You can see the final working version here:

 - [HTML](./examples/quiz.html)
 - [CSS](./examples/quiz.css)
 - [JavaScript](./examples/quiz.js)

