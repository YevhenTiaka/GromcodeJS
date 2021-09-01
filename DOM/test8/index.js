export function finishList() {
  const listLi = document.querySelector('.list');
  const list = document.querySelector('.special');
  const first = document.createElement('li');
  first.textContent = 8;
  listLi.append(first);
  const fourth = document.createElement('li');
  fourth.textContent = 1;
  listLi.prepend(fourth);
  const six = document.createElement('li');
  six.textContent = 4;
  list.before(six);
  const eight = document.createElement('li');
  eight.textContent = 6;
  list.after(eight);
}
