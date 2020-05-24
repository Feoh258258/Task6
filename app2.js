//Task 3 
let inputCheck = document.getElementById('task3Text');
function checkInput(e) {
  e.value = e.value.replace(/[^а-яА-Яa-zA-Z.]/g, ''); 
}