function emailValidation(emial, value) {
  const includeDomainAndAt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!includeDomainAndAt.test(value)) {
    emial.classList.add('is-invalid');
  } else {
    emial.classList.remove('is-invalid');
  }
}

export { emailValidation };
