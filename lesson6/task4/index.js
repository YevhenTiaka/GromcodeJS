const search = document.querySelector('.search__btn');
const inputText = document.querySelector('.search__input');
search.addEventListener('click', () => {
  console.log(inputText.getAttribute('type'));
});
