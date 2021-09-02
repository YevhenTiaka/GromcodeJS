function finishList() {
  const listLi = document.querySelector('.list');
  const list = document.querySelector('.special');
  const eight = document.createElement('li');
  eight.textContent = 8;
  listLi.append(eight);
  const first = document.createElement('li');
  first.textContent = 1;
  listLi.prepend(first);
  const fourth = document.createElement('li');
  fourth.textContent = 4;
  list.before(fourth);
  const six = document.createElement('li');
  six.textContent = 6;
  list.after(six);
}
