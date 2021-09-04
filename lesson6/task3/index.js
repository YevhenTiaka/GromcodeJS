// put your code here
const btns = document.querySelectorAll('.pagination__page');
const arrayBtns = [...btns];
// const handleClick = (event) => {
//   console.log(event.target.getAttribute('data-page-number'));
// };
arrayBtns.forEach((btn) =>
  btn.addEventListener('click', (event) =>
    console.log(event.target.getAttribute('data-page-number'))
  )
);
