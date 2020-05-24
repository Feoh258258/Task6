let timeInterval = setInterval(function() {
  colorSet();
}, 200)

function colorSet() {
  let allLittleBox = document.getElementsByClassName('free');
  let posibleNum = randNum(1, allLittleBox.length)-1;
  allLittleBox[posibleNum].style.backgroundColor = getRandomColor();
  allLittleBox[posibleNum].classList.remove("free");
}

function randNum(min, max) {
  let randNum = min - 0.5 + Math.random() * (max - min +1);
  return Math.round(randNum);
}

function getRandomColor() {
  let redInt = randNum(0,255);
  let blueInt = randNum(0,255);
  let greenInt = randNum(0,255);
  return 'rgb('+ redInt + ',' + greenInt + ',' + blueInt +')';
}



document.addEventListener("DOMContentLoaded", function() {

  function randTask2Num(min, max) {
    let randTask2Num = min - 0.5 + Math.random() * (max - min +1);
    return Math.round(randTask2Num);
  }
  
  let MathAction = randTask2Num(1,4);
  
  let actionNum
  switch(MathAction) {
    case 1:
      actionNum = '+';
      break;

      case 2:
      actionNum = '-';
      break;

      case 3:
      actionNum = '/';
      break;

      default : 
      actionNum = '*';
      break;
  }
  let xNum;
  let yNum;
  let resUmn;
  if(actionNum == '*') {
    xNum = randTask2Num(2,30);
    yNum = randTask2Num(2,30);
    resUmn = xNum*yNum;
  }else {
    xNum=randTask2Num(10,100);
    yNum=randTask2Num(10,100);
    switch(actionNum) {
      case "+":
        resUmn = xNum+yNum;
        break;
      
        case '-':
          resUmn = xNum-yNum;
        break;
  
        case '/':
          resUmn = xNum/yNum;
        break;
    }  
  }

  mathTask2 = document.getElementById('mathTask2');
  mathTask2.innerHTML = xNum + actionNum + yNum;


const mathRes = document.getElementById('mathRes');
console.log(mathRes);
mathRes.onclick = function(){
  let inputMath = document.getElementById('inputMath').value;
  if(inputMath == resUmn) {
    alert('Верно!');
    mathTask2.innerHTML = xNum + actionNum + yNum;
  }else {
    alert('Подумайте еще!');
  }
}



//Task 3 
let inputCheck = document.getElementById('task3Text').value;
inputCheck.oninput = function() {
  let checkInputText = inputCheck(/d/gm,'').length;
}
});//EndDOMLoaded