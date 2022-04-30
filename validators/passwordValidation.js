function passwordValidation(el, value) {
  const shorterThenNine = value.length < 8;
  const haveMinOneUpperCase = !/[A-Z]/g.test(value);
  const haveMinOneNumber = !/\d/g.test(value);
  const haveMinOneSymbol = !/[!@#$%^&*()_+=-]/g.test(value);
  if (
    haveMinOneUpperCase ||
    shorterThenNine ||
    haveMinOneNumber ||
    haveMinOneSymbol
  ) {
    el.classList.add('is-invalid');
  } else {
    el.classList.remove('is-invalid');
  }
}

function confirmPasswordValidation(
  confirmPassword,
  password,
  confirmPasswordValue
) {
  const passwordValue = password.value;

  if (passwordValue !== confirmPasswordValue) {
    confirmPassword.classList.add('is-invalid');
  } else {
    confirmPassword.classList.remove('is-invalid');
  }
}

export { passwordValidation, confirmPasswordValidation };
