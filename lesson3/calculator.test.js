import { calc } from './calculator';

it('should plus num', () => {
  const result = sum(2, 2);
  expect(Number).toEqual(4);
});

it('should minus num ', () => {
  const result = sum(4, 2);
  expect(Number).toEqual(2);
});

it('should  mult numbers ', () => {
  const result = sum(2, 3);
  expect(Number).toEqual(6);
});
it('should divide numbers ', () => {
  const result = sum(8, 4);
  expect(Number).toEqual(2);
});
