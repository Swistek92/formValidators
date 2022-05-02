import { changeStateOfValidation } from './changeStateOfValidation.js';

function passwordValidation(password, value) {
  const longerThenNine = value.length > 8;
  const haveMinOneUpperCase = /[A-Z]/g.test(value);
  const haveMinOneNumber = /\d/g.test(value);
  const haveMinOneSymbol = /[!@#$%^&*()_+=-]/g.test(value);
  const valid =
    haveMinOneUpperCase &&
    longerThenNine &&
    haveMinOneNumber &&
    haveMinOneSymbol;
  return changeStateOfValidation(valid, password);
}

function confirmPasswordValidation(
  confirmPassword,
  password,
  confirmPasswordValue
) {
  const passwordValue = password.value;

  const valid = passwordValue === confirmPasswordValue;
  return changeStateOfValidation(valid, confirmPassword);
}

export { passwordValidation, confirmPasswordValidation };
