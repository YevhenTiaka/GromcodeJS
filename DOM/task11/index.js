export function squaredNumbers() {
  const numbersAtr = document.querySelectorAll('li');
  const arrayNumbers = Array.from(numbersAtr);
  arrayNumbers.map((elem) => {
    elem.dataset.squaredNumber = elem.dataset.number * elem.dataset.number;
  });
}
