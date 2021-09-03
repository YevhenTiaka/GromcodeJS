const btn = document.querySelector('.single-use-btn');
let isClicked = false;
const btnClick = btn.addEventListener('click', () => {
  if (!isClicked) {
    console.log('clicked');
    isClicked = true;
  }
});
