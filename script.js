const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelectorAll('.score');
const moles = document.querySelectorAll('.mole');


let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('same hole')
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function mole() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) mole();
  }, time);
}

function startTheGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  mole();
  setTimeout(() => timeUp = true, 1000);
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));
