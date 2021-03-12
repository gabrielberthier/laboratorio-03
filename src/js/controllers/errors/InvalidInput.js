export class InvalidInputError extends Error {
  constructor(field) {
    super(`${field} é um campo inválido!`);
  }
}