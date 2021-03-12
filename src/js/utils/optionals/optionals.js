import { body } from 'express-validator';

/**
 *
 * @param { array } values
 * @returns { array }
 */
const optionalIsNumeric = values => {
  const resultSet = [];
  values.forEach(element => {
    resultSet.push(
      body(element, `${element} deve ser um número`).optional().isNumeric()
    );
  });
  return resultSet;
};

/**
 *
 * @param { array } values
 * @returns { array }
 */
const optionalString = values => {
  const resultSet = [];
  values.forEach(element => {
    resultSet.push(
      body(element, `${element} deve ser uma string de até 255 caracteres`)
        .optional()
        .isLength({ max: 255 })
        .escape()
    );
  });
  return resultSet;
};

/**
 *
 * @param { array } values
 * @returns { array }
 */
const optionalBoolean = values => {
  const resultSet = [];
  values.forEach(element => {
    resultSet.push(
      body(element, `${element} deve ser um valor booleano`)
        .optional()
        .toBoolean()
    );
  });
  return resultSet;
};

export { optionalIsNumeric, optionalString, optionalBoolean };
