/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import GamePlay from '../src/js/game';

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

  it('returns true if user can move', () => {
    const isMovable = jest.fn(() => true);
    const index = 0;
    expect(GamePlay.move(index)).toBeTruthy();
  });

  it('returns false if user can not move', () => {
    const isMovable = jest.fn(() => false);
    const index = 0;
    expect(GamePlay.move(index)).toBeFalsy();
  });

  it('returns the player 1', () => {
    GamePlay.getPlayers();
    expect(GamePlay.getPlayerOne().name).toMatch('Player1');
    expect(GamePlay.getPlayerOne().sign).toMatch('X');
  });

  it('returns the player 2', () => {
    GamePlay.getPlayers();
    expect(GamePlay.getPlayerTwo().name).toMatch('Player2');
    expect(GamePlay.getPlayerTwo().sign).toMatch('O');
  });

  it('returns who is turn', () => {
    GamePlay.getPlayers();
    expect(GamePlay.whosTurn()).toMatchObject({ name: 'Player1', sign: 'X' });
  });
});
