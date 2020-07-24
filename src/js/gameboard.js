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

export { GameBoard as default };