const GameBoard = (() => {
  let boardArray = Array(9);

  const getBoard = function () {
    return boardArray;
  };

  const updateBoard = function (index, sign) {
    boardArray[index] = sign;
  };

  const clearBoard = function () {
    boardArray = Array(9);
  };

  return {
    get: getBoard,
    update: updateBoard,
    clear: clearBoard,
  };
})();
/*
console.log(GameBoard.get());
console.log(GameBoard.update(2));
console.log(GameBoard.update(3));
console.log(GameBoard.update(8));
console.log(GameBoard.get());
console.log(GameBoard.clear());
console.log(GameBoard.get());
*/


const GamePlay = (() => {
  const gameStatus = false;
  let playerOne;
  let playerTwo;
  const playerOneScore = 0;
  const playerTwoScore = 0;
  let turn = 0;

  /* const getPlayers = function () {
	}; */

  const playerTurn = function () {
    if (turn % 2 === 0) {
      turn++;
      return playerOne;
    }
    turn++;
    return playerTwo;
  };

  const isTie = function () {

  };

  const isWin = function () {
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

    for (let i = 0; i < possibilities.length; i++) {
      if (possibilities[i].every(value => 'X')) {
        console.log('player1 wins');
        break;
      } else if (possibilities[i].every(value => 'O')) {
        console.log('player1 wins');
        break;
      }
    }
  };

  const isMovable = function () {

  };


	 return {};
})();