import Player from '../src/js/players';

it('should create players', () => {
  expect(Player('Player1', 'X')).toMatchObject({ name: 'Player1', sign: 'X' });
});