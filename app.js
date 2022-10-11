// alert('hello');

const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');
const playtoSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

p1Button.addEventListener('click', function () {
  //   alert('clicked');
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function () {
  //   alert('clicked');
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetBtn.addEventListener('click', reset);

playtoSelect.addEventListener('change', function () {
  //   alert('change');
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p1Display.textContent = 0;

  p2Score = 0;
  p2Display.textContent = 0;
  gameOver = false;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-danger', 'has-text-success');

  p1Button.disabled = false;
  p2Button.disabled = false;
}
