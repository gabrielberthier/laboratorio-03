import { validate } from 'gerador-validador-cpf';

/**
 * @function verifyCPF
 * @param {string} cpf
 *
 * @returns {boolean}
 */
const verifyCPF = async cpf => validate(cpf);

/**
 * @function cpfValidation
 * @param {string} cpf
 *
 * @returns {boolean}
 */
export const cpfValidation = async cpf => {
  const isValid = validate(cpf);
  if (isValid) {
    return true;
  }
  throw new Error('CPF inválido');
};

export default verifyCPF;
