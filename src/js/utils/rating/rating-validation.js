/**
 * @function ratingValidation
 * @param {string} rate
 *
 * @returns {boolean}
 */
const ratingValidation = rate => {
  const validOptions = ['ruim', 'regular', 'bom', 'otimo'];
  const rateLower = rate ? rate.toLowerCase() : '';
  if (validOptions.includes(rateLower) || rateLower === '') {
    return true;
  }
  throw new Error('Valor de avaliação não identificado');
};

export default ratingValidation;
