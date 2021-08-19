import { getSquaredNumbers, getOddNumbers } from './calculator.test';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it('should get Odd numbers', () => {
  const result = getOddNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it('should get Odd numbers', () => {
  const result = sum(1, 2);
  expect(result).toEqual(2, 4);
});
