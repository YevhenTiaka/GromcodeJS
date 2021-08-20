import { calc } from './calculator';

it('should plus num', () => {
  const result = calc(2, 2);
  expect(Number).toEqual(4);
});

it('should minus num ', () => {
  const result = calc(4, 2);
  expect(Number).toEqual(2);
});

it('should  mult numbers ', () => {
  const result = calc(2, 3);
  expect(Number).toEqual(6);
});
it('should divide numbers ', () => {
  const result = calc(8, 4);
  expect(Number).toEqual(2);
});
it('should get null because input is not a string', () => {
  const result = calc(84);
  expect(result).toEqual(null);
});
