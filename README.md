# Guess the Number

A simple web-based game where you need to guess a prime number between 2 and 97. Are you up for the challenge?

## How to Set Up and Play

Follow these steps to set up and play the game:

1. **Clone or Download the Repository:**

    You can clone this repository or download the ZIP file containing the code to your local machine.

2. **Open `index.html` in Your Browser:**

    Double-click on the `index.html` file, or right-click and open it with your preferred web browser. This will start the game in your browser.

3. **Guess the Prime Number:**

    - You will see an input field and a "Submit" button.
    - Enter your guess into the input field. The game only accepts guesses between 2 and 97, as these are prime numbers.
    - You can also press the "Enter" key to submit your guess.

4. **Win the Game:**

    - If you guess the correct prime number, the game will congratulate you and display the number of attempts it took you to win.
    - Once you've guessed the number correctly, you can't make any more guesses.

## Code Explanation

The section of `index.html` sets up the game's user interface, including the input field for guesses and the message display area.
```html
<!-- This part defines the structure of the game's HTML content. -->
<div class="container">
    <h1>Guess the Number</h1>
    <p>I'm thinking of a prime number between 2 and 97. Can you guess what it is?</p>
    <input id="guess-input" type="number" class="text-custom-blue">
    <button id="submit-button">Submit</button>
    <div id="message"></div>
</div>
<script src="main.js"></script>
```
The code in the `main.js` file fetches possible answers, selects a secret number, and handles user input and feedback.
```js
// This part of the code fetches the list of possible answers from the 'answers.json' file.
function loadAnswers() {
    fetch('answers.json')
        .then(response => response.json())
        .then(data => {
            possibleAnswers = data;
            selectSecretNumber();
        })
        .catch(error => console.error('Error loading answers:', error));
}

// This function selects a secret prime number from the possible answers.
function selectSecretNumber() {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    secretNumber = possibleAnswers[randomIndex].value;
}

// This part of the code handles user input and provides feedback on the guess.
function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        displayMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        displayMessage(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        guessInput.disabled = true;
        document.getElementById('submit-button').disabled = true;
    } else if (userGuess < secretNumber) {
        displayMessage('Too low! Try a higher number.');
    } else {
        displayMessage('Too high! Try a lower number.');
    }

    guessInput.value = '';
}
```
The `answers.json` file contains a list of prime numbers used as possible answers in the game.
```json
// This JSON file contains a list of prime numbers between 2 and 97, which are used as possible answers for the game.
[
    {"value": 2},
    {"value": 3},
    {"value": 5},
    {"value": 7},
    {"value": 11},
    {"value": 13},
    {"value": 17},
    {"value": 19},
    {"value": 23},
    {"value": 29},
    {"value": 31},
    {"value": 37},
    {"value": 41},
    {"value": 43},
    {"value": 47},
    {"value": 53},
    {"value": 59},
    {"value": 61},
    {"value": 67},
    {"value": 71},
    {"value": 73},
    {"value": 79},
    {"value": 83},
    {"value": 89},
    {"value": 97}
]
```
This answers.json file contains a list of prime numbers used as possible answers in the game.

### Technologies Used
> HTML

> JavaScript

> Tailwind CSS

**Author**
AlmostGen

## License
This code is open-source under the **MIT** License.

Feel free to modify, share, or contribute to this project as you see fit.
