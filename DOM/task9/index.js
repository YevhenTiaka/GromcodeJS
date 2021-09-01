export function finishForm() {
  const form = document.querySelector('form');
  form.removeAttribute('class');
  form.setAttribute('name', 'login');
  form.setAttribute('class', 'login-form');
  const input = document.querySelector('input');
  input.setAttribute('type', 'password');
}
finishForm();
