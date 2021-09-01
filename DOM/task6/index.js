export function clearList() {
  const list = document.querySelector('.categories');
  list.innerHTML = '';
  return list;
}
