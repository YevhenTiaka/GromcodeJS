export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }
  const arrNumbers = arr.map((item) => {
    return Math.abs(item);
  });
  const newArrNumbers = Math.min(...arrNumbers);
  return newArrNumbers * 2;
};
