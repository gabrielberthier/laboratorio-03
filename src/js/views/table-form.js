const campos = [
  "name",
  "first-grade",
  "first-grade",
  "frequency",
  "final",
];

const alerts = document.querySelector(".alerts");


function createTableRow() {
  const tbody = document.querySelector('table tbody');

  let index = 0;
  const tr = document.createElement('tr');

  const td = document.createElement('td');
  td.textContent = ++index;
  td.id = `${index}-${new Date().getTime()}`;
  tr.appendChild(td);

  campos.forEach((campo) => {
    const td = document.createElement('td');
    td.textContent = campo;
    td.id = `${campo}-${new Date().getTime()}`;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
}

const tableFormHandler = (event) => {
  event.preventDefault();


}

//document.querySelector('.botao').addEventListener('click', function(event) {
document.querySelector('.student-form').addEventListener('submit', tableFormHandler);
document.querySelector("#send-data").addEventListener("click", tableFormHandler);
document.querySelector("#close-alerts").addEventListener("click", () => {
  alerts.classList.toggle("d-none");
})