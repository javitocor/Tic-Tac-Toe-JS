/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GameBoard from './gameboard';
import GamePlay from './game';
import '../style/style.css';

const GameDisplay = (() => {
  const startButton = document.getElementById('submit');
  const playButton = document.getElementById('playAgain');
  const resetButton = document.getElementById('reset');
  const cells = document.querySelectorAll('.cell');
  const form = document.getElementById('form');
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

  const scoreBoard = function scoreBoard(player1 = 'Player1', player2 = 'Player2') {
    const player1name = document.getElementById('play1name');
    const player2name = document.getElementById('play2name');
    const player1score = document.getElementById('play1score');
    const player2score = document.getElementById('play2score');

    player1name.innerText = `${player1} (X)`;
    player2name.innerText = `${player2} (O)`;

    player1score.innerText = GamePlay.playerOneScore;
    player2score.innerText = GamePlay.playerTwoScore;
  };

  const changeFlow = function changeFlow() {
    if (GamePlay.endGame() === false) {
      return;
    }
    if (GamePlay.endGame() === 'tie') {
      message.innerHTML = 'It\'s a tie.';
      GamePlay.gameStatus = false;
      return;
    }
    GamePlay.endGame() === GamePlay.getPlayerOne() ? GamePlay.playerOneScore += 1 : GamePlay.playerTwoScore += 1;
    message.innerHTML = `${GamePlay.endGame().name} WIN! Congratulations...`;
    scoreBoard(GamePlay.getPlayerOne().name, GamePlay.getPlayerTwo().name);
    GamePlay.gameStatus = false;
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
    scoreBoard(GamePlay.getPlayerOne().name, GamePlay.getPlayerTwo().name);
    GamePlay.gameStatus = true;
  };

  const againGame = function againGame() {
    displayButtons('start');
    GameBoard.clear();
    cells.forEach(value => value.innerText = '');
    GamePlay.setTurn(0);
    message.innerText = '';
    scoreBoard(GamePlay.getPlayerOne().name, GamePlay.getPlayerTwo().name);
    GamePlay.gameStatus = true;
  };

  const resetGame = function resetGame() {
    displayButtons('restart');
    GameBoard.clear();
    GamePlay.playerOneScore = 0;
    GamePlay.playerTwoScore = 0;
    GamePlay.setTurn(0);
    GamePlay.playerOne = ('Player1', 'X');
    GamePlay.playerTwo = ('Player2', 'O');
    cells.forEach(value => value.innerText = '');
    message.innerText = '';
    scoreBoard(GamePlay.playerOne.name, GamePlay.playerTwo.name);
    document.getElementById('names').reset();
  };

  startButton.addEventListener('click', startGame);
  playButton.addEventListener('click', againGame);
  resetButton.addEventListener('click', resetGame);

  cells.forEach(
    cell => cell.addEventListener('click', getMark.bind(this, parseInt(cell.id, 10))),
  );

  return {

  };
})();

export {
  GameDisplay as
  default,
};
