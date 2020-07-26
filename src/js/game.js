/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
import Player from './players';
import GameBoard from './gameboard';

const GamePlay = (() => {
  var gameStatus = false;
  var playerOne;
  var playerTwo;
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var turn = 0;
  let playerOneWin = false;
  let playerTwoWin = false;

  const getPlayers = function getPlayers() {
    let name1;
    let name2;
    try {
      name1 = document.getElementById('player1').value || 'Player1';
      name2 = document.getElementById('player2').value || 'Player2';
    } catch (error) {
      name1 = 'Player1';
      name2 = 'Player2';
    }
    playerOne = Player(name1, 'X');
    playerTwo = Player(name2, 'O');
  };

  const getPlayerOne = function getPlayerOne() {
    return playerOne;
  };

  const getPlayerTwo = function getPlayerTwo() {
    return playerTwo;
  };

  const setTurn = function setTurn(value) {
    turn = value;
    return turn;
  };

  const changeTurn = function changeTurn() {
    if (turn % 2 === 0) {
      turn += 1;
      return playerOne;
    }
    turn += 1;
    return playerTwo;
  };

  const whosTurn = function whosTurn() {
    if (turn % 2 === 0) {
      return playerOne;
    }
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
        playerOneWin = true;
        playerTwoWin = false;
        return true;
      }
      if (possibilities[i].every(value => value === 'O')) {
        playerTwoWin = true;
        playerOneWin = false;
        return true;
      }
    }
    return false;
  };


  const isTie = function isTie() {
    const board = GameBoard.get();
    if (!isWin() && board.every(value => value !== '')) {
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
      GameBoard.update(index, whosTurn().sign);
      return true;
    }
    return false;
  };

  const endGame = function endGame(cb1 = isWin, cb2 = whoWon, cb3 = isTie) {
    if (cb1()) {
      return cb2();
    }
    if (cb3()) {
      return 'tie';
    }
    return false;
  };

  return {
    setTurn,
    changeTurn,
    endGame,
    move,
    gameStatus,
    playerOne,
    playerTwo,
    playerOneScore,
    playerTwoScore,
    getPlayers,
    whosTurn,
    getPlayerOne,
    getPlayerTwo,
  };
})();

export { GamePlay as default };