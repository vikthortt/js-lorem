import { lorem } from '../src/index';

test('Lorem function should return a string', () => {
  const actual = lorem();
  expect(typeof actual).toBe(typeof 'a string');
});

