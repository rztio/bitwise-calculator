const NUMBER_LIMIT = 20;
const EQUATION_LIMIT = 110;

var equation = "";
var number = "";
var storeBits = "";

var bits = document.querySelectorAll(".bit_select");
for (var i = 0; i < bits.length; i++) {
  bits[i].addEventListener("click", function() {
    changeBit(this.id);
  });
}

var numbers = document.querySelectorAll(".number:not(#equal)");
for (var i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener("click", function() {
    setDisplay(this.id);
  });
}

var operators = document.querySelectorAll(".operator:not(#back):not(#CE):not(#C), #equal");
for (var i = 0; i < operators.length; i++) {
   operators[i].addEventListener("click", function() {
    setEquation(this.id);
  });
}

back.addEventListener("click", function() {
  backspace();
});

CE.addEventListener("click", function() {
  clearLastEntry();
});

C.addEventListener("click", function() {
  deleteNumber();
  deleteEquation();
  deleteBits();
});

require(["./scripts/calculator"], function(parser){
    //calculator now loaded
})

function backspace() {
  number = number.slice(0, -1);
}

function clearLastEntry() {
  if(number !== ""){
     deleteNumber();
  } else {
    equation = equation.substring(0, equation.lastIndexOf(" "));
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
      var result = calculate(equation);
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
  if (id === "zero_shiftl") {
    op = " <<";
  } else if (id === "signed_shiftr") {
    op = " >>";
  } else if (id === "zero_shiftr") {
    op = " >>>";
  } else if (id === "and") {
    op = " &";
  } else {
    op = document.getElementById(id).innerHTML;
  }
  return op;
}

function calculate(input) {
  return parser.parse(input);
}
