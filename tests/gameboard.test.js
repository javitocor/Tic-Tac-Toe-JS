import GameBoard from '../src/js/gameboard';

describe('Gameboard', () => {
  it('returns an array with a length of 9', () => {
    expect(GameBoard.get().length).toBe(9);
  });

  it('returns an array object', () => {
    expect(GameBoard.get() instanceof Array).toBeTruthy();
  });

  it('updates the array with the given index by changing the value to the given sign', () => {
    GameBoard.update(0, 'X');
    expect(GameBoard.get()[0]).toBe('X');
  });

  it('clears the board object', () => {
    GameBoard.update(0, 'X');
    GameBoard.clear();
    expect(GameBoard.get()[0]).toBe('');
  });
});
