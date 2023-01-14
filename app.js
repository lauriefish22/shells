/* Imports */

/* Get DOM Elements */
const bbButton = document.getElementById('bb-button');
const cmButton = document.getElementById('cm-button');
const elmoButton = document.getElementById('elmo-button');

const bb = document.getElementById('bb-section');
const cm = document.getElementById('cm-section');
const elmo = document.getElementById('elmo-section');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;

bbButton.addEventListener('click', () => {
    handleGuess('bb');
});

cmButton.addEventListener('click', () => {
    handleGuess('cm');
});

elmoButton.addEventListener('click', () => {
    handleGuess('elmo');
});

function handleGuess(placeTheUserClicked) {
    removeClasses();
    const correctPlace = pickRandomPlace();
    const correctSectionEl = document.getElementById(`$correctPlace)-section1`);
    correctSectionEl.classList.add('cookie');


if (correctPlace === placeTheUserClicked) {
    correctGuesses++;
} else {
    incorrectGuesses++;
}
totalGuesses++;

winsEl.textContent = correctGuesses;
lossesEl.textContent = incorrectGuesses;
totalEl.textContent = totalGuesses;

function removeClasses() {
    bb.classList.remove('cookie');
    cm.classList.remove('cookie');
    elmo.classList.remove('cookie');
}

function pickRandomPlace() {
    const places = ['bb', 'cm', 'elmo'];
    const index = Math.floor(Math.random() * places.length);
    const correctPlace = places[index];
    return correctPlace;
}
/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
