const GameDisplay = (() => {
  const startButton = document.getElementById('submit');
  const playButton = document.getElementById('playAgain');
  const resetButton = document.getElementById('reset');
  const cells = document.querySelectorAll('.cell');
  const form = document.getElementById('form');
  const form2 = document.getElementById('form2');
  const buttonWrapper = document.querySelector('.button-wrapper');

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
    const message = document.getElementById('message');
    if (value === 'tie') {
      message.innerText = 'It is a Tie!';
    }
  };

  const scoreBoard = function scoreBoard() {
    let player1name = document.getElementById('play1name');
    let player2name = document.getElementById('play1score');
    let player1score = document.getElementById('play2name');
    let player2score = document.getElementById('play2score');

    player1name.innerText = GamePlay.playerOne.name;
    player1name.innerText = GamePlay.playerTwo.name;

    player1score.innerText = GamePlay.playerOneScore;
    player2score.innerText = GamePlay.playerTwoScore;
  };

  const getMark = function getMark(index) {
    console.log(index);
    GamePlay.isMovable(index);
    GamePlay.move(index);
    let position = document.getElementById(index);
    position.innerText = GamePlay.whosTurn().sign;
  };
  
  const startGame = function startGame() {
    GamePlay.getPlayers();
    displayButtons('start');
    GamePlay.gameStatus = true;
    GamePlay.playerTurn();
  };

  startButton.addEventListener('click', startGame);
  
  cells.forEach(cell => cell.addEventListener('click', function () {
    getMark(parseInt(cell.id));
  }));


  return { 
    scoreBoard,
  };
})();