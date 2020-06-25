const GameDisplay = (() => {
  const startButton = document.getElementById('submit');
  const playButton = document.getElementById('playAgain');
  const resetButton = document.getElementById('reset');
  const cells = document.querySelectorAll('cell');
  const player1name = document.getElementById('play1name');
  const player2name = document.getElementById('play1score');
  const player1score = document.getElementById('play2name');
  const player2score = document.getElementById('play2score');
  const message = document.getElementById('message');
  const form = document.getElementById('form');
  const form2 = document.getElementById('form2');
  const buttonWrapper = document.querySelector('.button-wrapper');

  const displayButtons = function displayButtons() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    if (player1.length > 0 && player2.length > 0) {
      buttonWrapper.style.display = 'block';
      form.style.display = 'none';
    }
  };

  const startGame = function startGame() {
    displayButtons();
    GamePlay.gameStatus = true;
  };

  startButton.addEventListener('click', startGame);

  const displayMessage = function displayMessage() {

  };

  const scoreBoard = function scoreBoard() {

  };


  return {

  };
})();