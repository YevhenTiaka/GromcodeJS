export function finishForm() {
  const form = document.querySelector('form');
  form.setAttribute('name', 'login');
  form.setAttribute('class', 'login-form');
  const input = document.querySelector('input');
  input.setAttribute('type', 'password');
  return form;
}
console.log(finishForm());
