export function manageClasses() {
  const one = document.querySelector('.one');
  one.setAttribute('class', 'selected');
  const two = document.querySelector('.two');
  two.classList.remove('two', 'selected');
  const three = document.querySelector('.three');
  three.toggleAttribute('three_done');
  const four = document.querySelector('.four');
  four.classList.add('another-class');
}
