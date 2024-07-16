let randomNumber = parseInt(Math.random() * 100 + 1);

const input = document.querySelector('#input');
const form = document.querySelector('form');
const previousValue = document.querySelector('.previousValue');
const remainAttempt = document.querySelector('.remaineAttemp');
const lowOrHighNumber = document.querySelector('.loworHighNumber');
const startOver = document.querySelector('.resultPara');

let p = document.createElement('p');

let playGame = true;

let inputArray = [];
let attempt = 1;

if (playGame) {
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        checkNumber(guess);
    });
}

function checkNumber(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`);
    } else if (guess < 1) {
        alert(`Please enter a number greater than 0`);
    } else if (guess > 100) {
        alert(`Your number ${guess} is greater than 100`);
    } else {
        inputArray.push(guess);
        if (attempt === 11) {
            addedValue(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame(guess);
        } else {
            addedValue(guess);
            correctNumber(guess);
        }
    }
}

function correctNumber(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed the correct number!`);
        endGame(guess);
    } else if (guess < randomNumber) {
        displayMessage(`You guessed a smaller number.`);
    } else if (guess > randomNumber) {
        displayMessage(`You guessed a bigger number than the actual number.`);
    }
}

function addedValue(guess) {
    input.value = '';
    previousValue.innerHTML += ` ${guess} `;
    attempt++;
    remainAttempt.innerHTML = `Your Remaine Attempt ${11 - attempt}`;
}

function displayMessage(message) {
    lowOrHighNumber.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id="newGame">Start New Game</button>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        inputArray = [];
        attempt = 1;
        previousValue.innerHTML = '';
        remainAttempt.innerHTML = `Your Remaine Attempt ${11 - attempt}`;
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
