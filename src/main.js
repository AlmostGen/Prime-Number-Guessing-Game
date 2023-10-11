let possibleAnswers = [];
let secretNumber;
let attempts = 0;

function loadAnswers() {
    fetch('answers.json')
        .then(response => response.json())
        .then(data => {
            possibleAnswers = data;
            selectSecretNumber();
        })
        .catch(error => console.error('Error loading answers:', error));
}

function selectSecretNumber() {
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
    secretNumber = possibleAnswers[randomIndex].value;
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

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

document.getElementById('submit-button').addEventListener('click', checkGuess);

// Add event listener for the Enter key
document.getElementById('guess-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

loadAnswers();
