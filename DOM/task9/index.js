export function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  loginForm.prepend(newInput);
  const secondInput = document.querySelector('input[name=password]');
  secondInput.setAttribute('type', 'password');
}
