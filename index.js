import { nameValidation } from './validators/nameValidation.js';
import { emailValidation } from './validators/emailValidation.js';
import {
  passwordValidation,
  confirmPasswordValidation,
} from './validators/passwordValidation.js';
import { rodoValidation } from './validators/rodoValidation.js';
import { checkValid } from './validators/checkValid.js';

const form = document.querySelector('.form-register');
const login = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const rodo = document.querySelector('#rodo');

login.addEventListener('keyup', ({ target: { value } }) => {
  nameValidation(login, value);
});

email.addEventListener('keyup', ({ target: { value } }) => {
  emailValidation(email, value);
});

password.addEventListener('keyup', ({ target: { value } }) => {
  passwordValidation(password, value);
});

confirmPassword.addEventListener('keyup', ({ target: { value } }) => {
  confirmPasswordValidation(confirmPassword, password, value);
});

rodo.addEventListener('change', () => {
  rodoValidation(rodo);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isLoginValid = checkValid(login);
  const isEmailValid = checkValid(email);
  const isPasswordValid = checkValid(password);
  const isConfirmPasswordValid = checkValid(confirmPassword);
  const isRodoValid = checkValid(rodo);

  if (
    isLoginValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isRodoValid
  ) {
    const data = {
      login: login.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      rodo: rodo.checked,
    };

    submitData(data);
  } else {
    alert('fill correct all fields!');
  }
});

function submitData(data) {
  fetch('https://przeprogramowani.pl/projekt-walidacja', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      resetForms();
      if (response.ok) {
        return response.text();
      }
      throw 'failed to send data';
    })
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((err) => {
      resetForms();
      alert(err, 'try again');
    });
}

function resetForms() {
  login.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
  rodo.checked = false;
}
