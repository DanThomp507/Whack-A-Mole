const holes = document.querySelectorAll('.hole');
const score = document.querySelectorAll('.score');
const moles = document.querySelectorAll('.mole');

let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
