const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const loginForm = document.forms[0];
const submitBtn = document.querySelector('.submit-button');
const users = {
  email: null,
  name: null,
  password: null,
};
const getData = (event) => {
  const emailText = emailInput.value;
  users.email = emailText;

  const userName = nameInput.value;
  users.name = userName;

  const passwordText = passwordInput.value;
  users.password = passwordText;

  const requiredFields = loginForm.reportValidity(event.target.value);
  if (requiredFields) {
    submitBtn.removeAttribute('disabled');
  }
  console.log(users);
};
loginForm.addEventListener('input', getData);

const sendDataBtn = document.querySelector('.submit-button');

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line no-shadow
// eslint-disable-next-line arrow-body-style

const createUser = (usersData) =>
  fetch(`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(usersData),
  });

const sumbitCreatedUser = (event) => {
  event.preventDefault();
  createUser(users);
  emailInput.value = '';
  nameInput.value = '';
  passwordInput.value = '';

  function getUsers() {
    return fetch(
      `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`
    ).then((response) => response.json());
  }
  function getUsersById(userId) {
    return fetch(
      `${`https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`}/${userId}`
    ).then((response) => response.json());
  }
  getUsers().then((user) => {
    getUsersById(user.length + 1).then((data) => alert(JSON.stringify(data)));
  });
  // function getUsersList() {
  //   return fetch(
  //     `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2`
  //   ).then((response) => response.json());
  // }

  // getUsersList().then((data) => {
  //   alert(JSON.stringify(data[data.length - 1]));
  // });
};
loginForm.addEventListener('submit', sumbitCreatedUser);
