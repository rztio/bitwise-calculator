window.addEventListener("keypress", function(e){
  var charCode = (e.which) ? e.which : e.keyCode;
  var charStr = String.fromCharCode(charCode);

  if (charCode < 48 || charCode > 57) return;

  if(charStr === "1"){
    document.getElementById("one").click();
  } else if (charStr === "2") {
    document.getElementById("two").click();
  } else if (charStr === "3") {
  document.getElementById("three").click();
  } else if (charStr === "4") {
    document.getElementById("four").click();
  } else if (charStr === "5") {
    document.getElementById("five").click();
  } else if (charStr === "6") {
    document.getElementById("six").click();
  } else if (charStr === "7") {
    document.getElementById("seven").click();
  } else if (charStr === "8") {
    document.getElementById("eight").click();
  } else if (charStr === "9") {
  document.getElementById("nine").click();
  } else if (charStr === "0") {
    document.getElementById("zero").click();
  }
});
