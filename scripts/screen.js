const NUMBER_LIMIT = 20;
const EQUATION_LIMIT = 110;

var equation = "";
var number = "";
var storeBits = "";

require(["scripts/calculator"], function(parser){
    //calculator.js now loaded
})

function backspace() {
  number = number.slice(0, -1);
  showNumber(number);
}

function clearLastEntry() {
  if(number !== ""){
     deleteNumber();
  } else {
    equation = equation.substring(0, equation.lastIndexOf(" ")-1);
    showEquation(equation);
  }
}

function deleteNumber() {
  number = "";
  showNumber(number);
}

function deleteEquation() {
  equation = "";
  showEquation(equation);
}

function deleteBits(){
  storeBits = "";
  for (var i = 0; i < bits.length; i++) {
    document.getElementById(bits[i].id).innerHTML = "0";
  };
}

function showNumber(n){
    document.getElementById("display").innerHTML = n;
}

function showEquation(e){
    document.getElementById("equation").innerHTML = e;
}

function changeBit(id) {
  if (document.getElementById(id).innerHTML === "0"){
      document.getElementById(id).innerHTML = "1";
  } else {
      document.getElementById(id).innerHTML = "0";
  }

  for (var i = 0; i < bits.length; i++) {
    storeBits += document.getElementById(bits[i].id).innerHTML;
  }
  number = bigInt(storeBits, 2);
  showNumber(number);
  storeBits = "";
}

function setDisplay(id){
  if (number.length > NUMBER_LIMIT) return;
  number += document.getElementById(id).innerHTML;
  showNumber(number);
}

function setEquation(id){
  if (storeBits === "") deleteBits();

  if (id !== "equal") {
    if (equation.length < EQUATION_LIMIT) {
      includeNumber();
      equation += convertOperator(id);
    }
  } else if (id === "equal"){
    includeNumber();
    try {
      var result = parser.parse(equation);
      showNumber(result);
    } catch (err) {
      showNumber(err.messages);
    }
  }
  showEquation(equation);
}

function includeNumber(){
  if (number !== ""){
    equation = equation + " " + number;
    number = "";
    showNumber(number);
  }
}

function convertOperator(id){
  var op = "";

  switch (id) {
    case "zero_shiftl":
      op = " <<";
      break;
    case "signed_shiftr":
      op = " >>";
      break;
    case "zero_shiftr":
      op = " >>>";
      break;
    case "and":
      op = " &";
      break;
    default:
      op = document.getElementById(id).innerHTML;
    }
  return op;
}
