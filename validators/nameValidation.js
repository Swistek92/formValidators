function nameValidation(el, value) {
  const longerThenTwo = value.length < 2;
  const includeDigitsAndSpecialCharacters = /[1-9!@#$%^&*()_+=-]/g.test(value);
  if (longerThenTwo || includeDigitsAndSpecialCharacters) {
    el.classList.add('is-invalid');
  } else {
    el.classList.remove('is-invalid');
  }
}

export { nameValidation };
