import { changeStateOfValidation } from './changeStateOfValidation.js';

function emailValidation(emial, value) {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = validEmail.test(value);

  return changeStateOfValidation(valid, emial);
}

export { emailValidation };
