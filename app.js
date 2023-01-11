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

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;

bbButton.addEventListener('click', () => {});

cmButton.addEventListener('click', () => {});

elmoButton.addEventListener('click', () => {});

function clickLocation ()
function pickRandomPlace () {
    const places = ['bigBird'. 'cookiemonster', 'elmo'];
}
    const index = Math.floor(Math.random() * places.length);
    const corrrectPlace = places[index];
    return corrrectPlace;
/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
