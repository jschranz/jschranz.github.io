var values = new Array();
values[0] = 1;
values[1] = 2;
values[2] = 3;
values[3] = 4;
values[4] = 5;

function ShowAnswer() {

var firstinput = document.getElementById("inputone").value;
var secondinput = document.getElementById('inputtwo').value;

if (firstinput=="one"){
    firstinput = values[0];
  }
  else if (firstinput=="two"){
    firstinput = values[1];
  }
  else if (firstinput=="three"){
    firstinput = values[2];
  }
  else if (firstinput=="four"){
    firstinput = values[3];
  }
  else if (firstinput=="five"){
    firstinput = values[4];
  }

  if (secondinput=="one"){
    secondinput = values[0];
  }
  else if (secondinput=="two"){
    secondinput = values[1];
  }
  else if (secondinput=="three"){
    secondinput = values[2];
  }
  else if (secondinput=="four"){
    secondinput = values[3];
  }
  else if (secondinput=="five"){
    secondinput = values[4];
  }

if (document.getElementById("Subtraction").checked) {
    answer = firstinput-secondinput;
  }
  else if (document.getElementById("Multiplication").checked) {
    answer = firstinput*secondinput;
  }
  else if (document.getElementById("Division").checked) {
    answer = firstinput/secondinput;
  }
  if (document.getElementById("Addition").checked){
    answer = firstinput+secondinput;
  }
  if (isNaN(answer)) {
      answer = "NaN";
  }
document.getElementById("answer").innerHTML=answer;
}
function Reset(){

  document.getElementById("Calculator").reset();
  document.getElementById("answer").innerHTML="Anwser Appears Here";

}
