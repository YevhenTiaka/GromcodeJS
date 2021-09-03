const handleClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.textContent);
  }
};
document.body.addEventListener('click', handleClick);
