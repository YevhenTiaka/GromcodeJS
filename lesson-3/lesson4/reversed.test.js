//Reverse tests
import { reverseArr } from './reversed';
import { withdraw } from './reversed';
import { getAdults } from './reversed';
it('should reverse arr ', () => {
  const result = reverseArr([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});

it('should reverse arr', () => {
  const result = reverseArr([100, 200, 300, 400]);
  expect(result).toEqual([400, 300, 200, 100]);
});

it('should reverse arr', () => {
  const result = reverseArr(['i', 'l', 'm']);
  expect(result).toEqual(['m', 'l', 'i']);
});

//withdraw tests
it('should return rest of many ', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should reverse arr', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1, [1400, 87, -6]);
});
it('should reverse arr', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -3], 'User', 22);
  expect(result).toEqual(-1, [1400, 87, -6]);
});

//filtration object
it('should return object wich contains persons > 18 ages', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('should return object wich contains persons > 18 ages', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('should return object wich contains persons > 18 ages', () => {
  const result = getAdults({ Bob: 21, Tom: 5 });
  expect(result).toEqual({ Bob: 21 });
});
