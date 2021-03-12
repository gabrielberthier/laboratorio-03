import { kebabCase, camelCase } from "../utils/case-transform";
import { StudentGrade } from "../models/student-grade";
import { InvalidInputBagError } from "../controllers/errors/InvalidInputBag";

export class TableFormView {
  constructor() {
    this.alerts = document.querySelector(".alerts");
    this.initAlerts();
    this.listErros = document.getElementById("list-errors");
    this.modal = document.querySelector(".modal");
    this.closeModalButton = document.querySelector("button.btn-close");
  }

  initAlerts() {
    document.querySelector("#close-alerts").addEventListener("click", () => {
      this.alerts?.classList.toggle("d-none");
    })
  }

  /**
 * 
 * @param {StudentGrade} studentGrade  
 */
  createTableRow(studentGrade) {
    const tbody = document.querySelector('table tbody');

    let index = 0;
    const tr = document.createElement('tr');

    const td = document.createElement('td');
    td.textContent = ++index;
    td.id = `${index}-${new Date().getTime()}`;
    tr.appendChild(td);

    for (const [field, value] of Object.entries(studentGrade)) {
      const td = document.createElement('td');
      td.textContent = value;
      const kebabField = kebabCase(field);
      td.id = `${kebabField}-${new Date().getTime()}`;
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
    this.closeModalButton.click();
  }
  /**
   * 
   * @param {InvalidInputBagError} errors 
   */
  presentErrors(errorsList) {
    this.alerts.classList.remove("d-none");
    this.listErros.innerHTML = "";
    errorsList.errors.forEach(element => {
      const li = document.createElement("li");
      li.textContent = element;
      this.listErros.appendChild(li);
    });
    this.closeModalButton.click();
  }

  getInputValues() {
    const inputs = [
      "student-name",
      "student-code",
      "student-first-grade",
      "student-second-grade",
      "student-final-grade",
      "student-frequency"
    ];
    const inputValues = inputs
      .map(el => document.getElementById(el))
      .reduce((acc, current) => {
        const name = camelCase(current.id);
        acc[name] = current.value;
        return acc;
      }, {});
    return inputValues;
  }
}
