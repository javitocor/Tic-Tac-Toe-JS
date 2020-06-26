/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const GameDisplay = (() => {
  const startButton = document.getElementById('submit');
  const playButton = document.getElementById('playAgain');
  const resetButton = document.getElementById('reset');
  const cells = document.querySelectorAll('.cell');
  const form = document.getElementById('form');
  const form2 = document.getElementById('form2');
  const buttonWrapper = document.querySelector('.button-wrapper');
  const message = document.getElementById('message');

  const displayButtons = function displayButtons(value) {
    if (value === 'start') {
      buttonWrapper.style.display = 'block';
      form.style.display = 'none';
    } else {
      buttonWrapper.style.display = 'none';
      form.style.display = 'block';
    }
  };

  const gameOver = function gameOver(value) {
    if (value === 'tie') {
      message.innerText = 'It is a Tie!';
    }
  };

  const scoreBoard = function scoreBoard() {
    const player1name = document.getElementById('play1name');
    const player2name = document.getElementById('play1score');
    const player1score = document.getElementById('play2name');
    const player2score = document.getElementById('play2score');

    player1name.innerText = GamePlay.playerOne.name;
    player1name.innerText = GamePlay.playerTwo.name;

    player1score.innerText = GamePlay.playerOneScore;
    player2score.innerText = GamePlay.playerTwoScore;
  };

  const changeFlow = function changeFlow() {
    if (GamePlay.endGame() === false) {
      return;
    }
    if (GamePlay.endGame() === 'tie') {
      message.innerHTML = 'It\'s a tie.';
      return;
    }
    message.innerHTML = `${GamePlay.endGame().name} WIN!`;
  };

  const getMark = function getMark(index) {
    if (GamePlay.gameStatus === false) {
      return;
    }
    if (GamePlay.move(index)) {
      const position = document.getElementById(index);
      position.innerText = GamePlay.whosTurn().sign;
      GamePlay.changeTurn();
      changeFlow();
    } else {
      message.innerHTML = 'You can\'t move on that spot!';
    }
  };

  const startGame = function startGame() {
    GamePlay.getPlayers();
    displayButtons('start');
    GamePlay.gameStatus = true;
  };

  startButton.addEventListener('click', startGame);

  cells.forEach(
    cell => cell.addEventListener('click', getMark.bind(this, parseInt(cell.id, 10))),
  );

  return {
    scoreBoard,
  };
})();