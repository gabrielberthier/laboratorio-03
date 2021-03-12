/**
 * @function validateStringName
 * @param {string} nome
 *
 * @returns {boolean}
 */
export const validateStringName = nome => {
  const isValid = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+(\s{0,1}[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ])*$/.test(
    nome
  );

  return isValid;
};


