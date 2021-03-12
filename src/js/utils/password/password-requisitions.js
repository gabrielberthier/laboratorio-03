/**
 * @function passwordMatchesRequirements
 * @param {string} password
 *
 * @returns {boolean}
 */
const passwordMatchesRequirements = password => {
  const regex = /^(?=.*[a-z])(?=.*\d{2})(?=.*[!@#$%^&*(),.?":{}|<>~\\])[a-zA-Z\d\w\W!@#$%^&*(),.?":{}|<>~\\]{6,}$/gm;
  const isValid = regex.test(password);
  if (!isValid)
    throw new Error(
      ' A senha precisa conter um caractere especial, dois dígitos e no mínimo 6 caracteres.'
    );
  return isValid;
};

export default passwordMatchesRequirements;
