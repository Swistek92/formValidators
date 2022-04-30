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
    const data = new FormData();

    data.append('login', login.value);
    data.append('email', email.value);
    data.append('password', password.value);
    data.append('confirmPassword', confirmPassword.value);
    data.append('rodo', rodo.checked);

    submitData(data);
  } else {
    alert('blad');
  }
});

function submitData(data) {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://przeprogramowani.pl/projekt-walidacja', true);

  xhr.onloadstart = () => {
    console.log('wyslano');
  };

  xhr.onloadend = () => {
    console.log('orzymano dane');
    console.log(xhr.responseText);
  };

  xhr.send(data);
}
