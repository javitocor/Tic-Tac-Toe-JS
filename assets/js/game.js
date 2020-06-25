const GameBoard = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];

  const getBoard = function getBoard() {
    return boardArray;
  };

  const updateBoard = function updateBoard(index, sign) {
    boardArray[index] = sign;
  };

  const clearBoard = function clearBoard() {
    boardArray = ['', '', '', '', '', '', '', '', ''];
  };

  return {
    get: getBoard,
    update: updateBoard,
    clear: clearBoard,
  };
})();


const GamePlay = (() => {
  let gameStatus = false;
  let playerOne;
  let playerTwo;
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let turn = 0;
  let playerOneWin = false;
  let playerTwoWin = false;

  const getPlayers = function getPlayers() {
    const name1 = document.getElementById('player1').value;
    const name2 = document.getElementById('player2').value;

    playerOne = Player(name1, 'X');
    playerTwo = Player(name2, 'O');
  };

  const playerTurn = function playerTurn() {
    if (turn % 2 === 0) {
      turn += 1;
      return playerOne;
    }
    turn += 1;
    return playerTwo;
  };

  const isWin = function isWin() {
    const board = GameBoard.get();
    const line1 = [board[0], board[1], board[2]];
    const line2 = [board[3], board[4], board[5]];
    const line3 = [board[6], board[7], board[8]];
    const line4 = [board[0], board[3], board[6]];
    const line5 = [board[1], board[4], board[7]];
    const line6 = [board[2], board[5], board[8]];
    const diagonal1 = [board[0], board[4], board[8]];
    const diagonal2 = [board[2], board[4], board[6]];

    const possibilities = [line1, line2, line3, line4, line5, line6, diagonal1, diagonal2];

    for (let i = 0; i < possibilities.length; i += 1) {
      if (possibilities[i].every(value => value === 'X')) {
        playerOneScore += 1;
        playerOneWin = true;
        gameStatus = false;
        return true;
      }
      if (possibilities[i].every(value => value === 'O')) {
        playerTwoScore += 1;
        playerTwoWin = true;
        gameStatus = false;
        return true;
      }
    }
    return false;
  };


  const isTie = function isTie() {
    const board = GameBoard.get();
    if (!isWin() && board.every(value => value !== '')) {
      gameStatus = false;
      return true;
    }
    return false;
  };

  const whoWon = function whoWon() {
    if (isWin()) {
      return playerOneWin ? playerOne : playerTwo;
    }
    return false;
  };

  const isMovable = function isMovable(index) {
    const board = GameBoard.get();
    if (board[index] === '') {
      return true;
    }
    return false;
  };

  const move = function move(index) {
    if (isMovable(index)) {
      GameBoard.update(index, playerTurn());
      return true;
    }
    return false;
  };

  return {
    isWin, isTie, whoWon, move, gameStatus, playerOne, playerTwo, playerOneScore, playerTwoScore,
  };
})();