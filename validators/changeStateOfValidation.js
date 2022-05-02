function changeStateOfValidation(valid, element) {
  if (!valid) {
    element.classList.add('is-invalid');
  } else {
    element.classList.remove('is-invalid');
  }
}

export { changeStateOfValidation };
