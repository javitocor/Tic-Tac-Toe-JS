const GamePlay = require('../src/js/game');

describe('GamePlay', () => {
  it('assigns the value whatever passed in and returns the same value', () => {
    expect(GamePlay.setTurn(1)).toBe(1);
  });

  it('assigns the value whatever passed in and returns the same value', () => {
    expect(GamePlay.setTurn(1)).toBe(1);
  });

  it('changes the turn value', () => {
    GamePlay.getPlayers();

    expect(GamePlay.changeTurn()).toMatchObject({ name: 'Player2', sign: 'O' });
  });

  it('returns the winner if it is a win', () => {
    const isWin = jest.fn(() => true);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => false);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toMatchObject({ name: 'Player', sign: 'X' });
  });

  it('returns false if it is not a win and not a tie', () => {
    const isWin = jest.fn(() => false);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => false);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toBeFalsy();
  });

  it('returns a string if it is a tie', () => {
    const isWin = jest.fn(() => false);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => true);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toMatch('tie');
  });
});
