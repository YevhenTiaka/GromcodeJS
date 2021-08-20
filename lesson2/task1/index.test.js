import getSum, { getSquareArray, getOddNumbers } from './calculator';

it('should get squared numbers ', () => {
  const result = getSquareArray([2, 4]);
  expect(result).toEqual([4, 16]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of  numbers ', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
