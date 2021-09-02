function sumOfSquares(num) {
  // eslint-disable-next-line prefer-rest-params
  return [...arguments].reduce((acc, elem) => acc + elem ** elem, 0);
}

console.log(sumOfSquares(1, 2, 3, 4, 5));
