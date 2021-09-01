export function setButton(buttonText) {
  const setBtn = document.getElementsByTagName('body');
  setBtn.innerHTML = '<button>button text</button>';
  return setBtn;
}
console.log(setButton());
