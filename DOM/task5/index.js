export function setButton(buttonText) {
  const setBtn = document.querySelector('body');
  setBtn.innerHTML = `<button>${buttonText}</button>`;
  return setBtn;
}
console.log(setButton('this is button'));
