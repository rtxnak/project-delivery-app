function emailValidate(inputLogin) {
  const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(inputLogin);
}

export default emailValidate;
