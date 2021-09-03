export function manageClasses() {
  const one = document.querySelector('.one');
  one.classList.add('one', 'selected');
  const two = document.querySelector('.two');
  two.classList.remove('selected');
  const three = document.querySelector('.three');
  three.classList.toogle('three_done');
  const four = document.querySelector('.four');
  four.classList.add('class', 'another-class');
}

manageClasses();
