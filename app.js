// alert('hello');

const p1 = {
  score: 0,
  button: document.querySelector('#p1Btn'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Btn'),
  display: document.querySelector('#p2Display'),
};

const resetBtn = document.querySelector('#reset');
const playtoSelect = document.querySelector('#playto');

let winningScore = 3;
let gameOver = false;

function updateScore(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function () {
  //   alert('clicked');
  updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
  //   alert('clicked');
  updateScore(p2, p1);
});

resetBtn.addEventListener('click', reset);

playtoSelect.addEventListener('change', function () {
  //   alert('change');
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
