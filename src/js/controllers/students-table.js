import { TableFormView } from "../views/table-form";
import { validateStringName } from "../utils/valid-string/valid-string-checker";
import { isString, isValidFloat } from "../utils/type-verify/is";
import { InvalidInputBagError } from "./errors/InvalidInputBag";
import { StudentGrade } from "../models/student-grade";
import { Student } from "../models/student";

class StudentTableController {
  constructor() {
    this.student = null;
    this.view = new TableFormView();
  }


  handleNewStudent(event) {
    event.preventDefault();
    const vals = this.view.getInputValues();
    const {
      studentName,
      studentCode,
      studentFirstGrade,
      studentSecondGrade,
      studentFinalGrade,
      studentFrequency } = vals;
    try {
      this.validateInputs(vals);
      const student = new Student(studentName, studentCode);
      this.student = new StudentGrade(
        student,
        studentFirstGrade,
        studentSecondGrade,
        studentFrequency,
        studentFinalGrade
      );
      const rowRegistry = this.student.asRowRegistry();
      console.log(rowRegistry);
      this.view.createTableRow(rowRegistry);
    } catch (exception) {
      if (exception instanceof InvalidInputBagError)
        return this.view.presentErrors(exception);
      console.error(exception);
    }
  }

  validateInputs(vals) {
    const rules = {
      studentName: {
        validation: (value) => validateStringName(value),
        message: "Nome de estudante inválido",
      }
      ,
      studentCode: {
        validation: (value) => {
          return isString(value) && value.length > 3;
        },
        message: "Código de estudante inválido"
      },
      studentFirstGrade: {
        validation: (value) => isValidFloat(value),
        message: "Primeira nota inválida"
      },
      studentSecondGrade: {
        validation: (value) => isValidFloat(value),
        message: "Segunda nota inválida"
      },
      studentFinalGrade: {
        validation: (value) => {
          if (!value) {
            return true;
          }
          return isValidFloat(value);
        },
        message: "Nota final inválida"
      },
      studentFrequency: {
        validation: (value) => isValidFloat(value),
        message: "A frequência atribuida não é válida"
      },
    };
    const errorInputBag = new InvalidInputBagError();
    for (const [key, val] of Object.entries(vals)) {
      if (key in rules) {
        const { validation: funValidation, message } = rules[key];
        if (!funValidation(val)) {
          errorInputBag.error = message;
        }
      }
    }
    if (errorInputBag.errors.length) throw errorInputBag;
  }

}

export const controller = new StudentTableController();