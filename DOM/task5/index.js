export function setButton(buttonText) {
  const setBtn = document.getElementsByTagName('body');
  setBtn.innerHTML = `<button>${buttonText}</button>`;
  return setBtn;
}
console.log(setButton('text button bla la'));
