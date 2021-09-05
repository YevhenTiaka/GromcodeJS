const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passworErrorElem = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an emeail';
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};
const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);

  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);

  passworErrorElem.textContent = errorText;
};
emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};
formElem.addEventListener('submit', onFormSubmit);
