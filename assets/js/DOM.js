const GameDisplay = (() => {
  const startButton = document.getElementById('submit');
  const playButton = document.getElementById('playAgain');
  const resetButton = document.getElementById('reset');
  const cells = document.querySelectorAll('cell');
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
    GamePlay.getPlayers();
    displayButtons();
    scoreBoard();
    GamePlay.gameStatus = true;
  };

  const checkGameStatus = function checkGameStatus() {

  };

  const gameOver = function gameOver(value) {
    const message = document.getElementById('message');
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

  startButton.addEventListener('click', startGame);


  return {

  };
})();