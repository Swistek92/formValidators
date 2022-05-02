function checkValid(element) {
  return !Object.values(element.classList).includes('is-invalid');
}

export { checkValid };
