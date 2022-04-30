function rodoValidation(rodo) {
  if (!rodo.checked) {
    rodo.classList.add('is-invalid');
  } else {
    rodo.classList.remove('is-invalid');
  }
}

export { rodoValidation };
