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


window.addEventListener("keypress", function(e){
  var charCode = (e.which) ? e.which : e.keyCode;
  var charStr = String.fromCharCode(charCode);

  switch(charStr){
    case "1":
      document.getElementById("one").click();
      break;
    case "2":
      document.getElementById("two").click();
      break;
    case "3":
      document.getElementById("three").click();
      break;
    case "4":
      document.getElementById("four").click();
      break;
    case "5":
      document.getElementById("five").click();
      break;
    case "6":
      document.getElementById("six").click();
      break;
    case "7":
      document.getElementById("seven").click();
      break;
    case "8":
      document.getElementById("eight").click();
      break;
    case "9":
      document.getElementById("nine").click();
      break;
    case "0":
      document.getElementById("zero").click();
      break;
    case "<":
      document.getElementById("zero_shiftl").click();
      break;
    case ">":
      document.getElementById("signed_shiftr").click();
      break;
    case ".":
      document.getElementById("zero_shiftr").click();
      break;
    case "&":
      document.getElementById("and").click();
      break;
    case "|":
      document.getElementById("or").click();
      break;
    case "^":
      document.getElementById("xor").click();
      break;
    case "~":
      document.getElementById("not").click();
      break;
    case "(":
      document.getElementById("bracketo").click();
      break;
    case ")":
      document.getElementById("bracketc").click();
      break;
    case "[":
      document.getElementById("CE").click();
      break;
    case "]":
      document.getElementById("C").click();
      break;
  }
});

window.addEventListener("keydown", function(e){
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode === 13) {
    e.preventDefault();
    document.getElementById("equal").click();
  } else if (charCode === 8) {
    e.preventDefault();
    document.getElementById("back").click();
  }
});
