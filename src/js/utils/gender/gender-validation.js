/**
 * @function genderValidation
 * @param {string} gender
 *
 * @returns {boolean}
 */
const genderValidation = gender => {
  const validOptions = ['MASCULINO', 'FEMININO', 'N.A'];
  const genderUpper = gender ? gender.toUpperCase() : '';
  if (validOptions.includes(genderUpper)) {
    return true;
  }
  throw new Error('Valor de gênero não identificado');
};

export default genderValidation;
