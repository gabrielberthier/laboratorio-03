import { controller } from '../../controllers/students-table'

//document.querySelector('.botao').addEventListener('click', function(event) {
document.querySelector('.student-form').addEventListener('submit', event => controller.handleNewStudent(event));
document.querySelector("#send-data").addEventListener("click", event => controller.handleNewStudent(event));
