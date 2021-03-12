/**
 * 
 * @param {String} str 
 * @return {String}
 */
export function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * 
 * @param {String} str 
 * @return {String}
 */
export function camelCase(str) {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });

}