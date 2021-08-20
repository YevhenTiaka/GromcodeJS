import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get squared numbers ', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(Number).toEqual(4);
});
