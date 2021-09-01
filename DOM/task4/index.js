export function setTitle(text) {
  const title = document.querySelector('.title');
  console.log((title.textContent = text));
  return title;
}
// setTitle('dsdsdsd');
