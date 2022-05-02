import { changeStateOfValidation } from './changeStateOfValidation.js';

function nameValidation(el, value) {
  const longerThenTwo = value.length < 2;
  const includeDigitsAndSpecialCharacters = /[1-9!@#$%^&*()_+=-]/g.test(value);
  const valid = !longerThenTwo && !includeDigitsAndSpecialCharacters;
  return changeStateOfValidation(valid, el);
}

export { nameValidation };
