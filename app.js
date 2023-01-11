/* Imports */

/* Get DOM Elements */
const bbButton = document.getElementById('bb-button');
const cmButton = document.getElementById('cm-button');
const elmoButton = document.getElementById('elmo-button');

const bigBird = document.getElementById('bb');
const cookiemonster = document.getElementById('cm');
const elmo = document.getElementById('elmo');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
console.log('bb');


let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;

bbButton.addEventListener('click', () => {});

cmButton.addEventListener('click', () => {});

elmoButton.addEventListener('click', () => {});

function clickLocation ();
function removeClasses ();
const correctPlace = pickRandomPlace();
const correctSectionEl = document.getElementById{correctPlace}-section);

correctSectionEl.classList.add('cookie');

if (correctPlace === placeTheUserClicked) {
    correctGuesses++;
} else {
    incorrectGuesses++;
}
totalGuesses++

winsEl.textContent = correctGuesses;
lossesEl.textContent = incorrectGuesses;
totalEl.textContent = totalGuesses;

    function pickRandomPlace () {
        const places = ['bigBird'. 'cookiemonster', 'elmo'];
        const index = Math.floor(Math.random() * places.length);
        const correctPlace = places[index];
        return correctPlace;}
/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
