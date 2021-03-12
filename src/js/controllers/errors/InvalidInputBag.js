export class InvalidInputBagError extends Error {
  constructor() {
    super("Dados inválidos");
    this._errors = [];
  }

  /**
   * @param {any} error
   */
  set error(error) {
    this._errors.push(error);
  }

  get errorString() {
    return this._errors.join("");
  }

  get errors() {
    return this._errors;
  }
}