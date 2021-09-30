const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const serverUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/';
// algo
// 1. read form -get user info +++
// 2. send data to  server
// 3. handle server response
const CreateUserHandler = (event) => {
  event.preventDefault();

  const usersData = Object.fromEntries(new FormData(loginForm));
  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(usersData),
  })
    .then((response) => response.json())
    .then((body) => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })
    .catch(() => {
      errorText.textContent = 'Failed to create user';
    });
};
const validateFormHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
};
loginForm.addEventListener('input', validateFormHandler);
loginForm.addEventListener('submit', CreateUserHandler);
