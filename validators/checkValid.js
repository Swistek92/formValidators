function checkValid(element) {
  if (Object.values(element.classList).includes('is-invalid')) {
    return false;
  } else {
    return true;
  }
}

export { checkValid };
