// const handleClick = (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     console.log(event.target.textContent);
//   }
// };
// document.body.addEventListener('click', handleClick);

const btn = document.querySelectorAll('.btn');
const handleClick = (event) => console.log(event.target.textContent);
btn[0].addEventListener('click', handleClick);
btn[1].addEventListener('click', handleClick);
