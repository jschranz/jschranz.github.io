
function ShowAnswer() {

var firstinput = document.getElementById("inputone").value;
var secondinput = document.getElementById('inputtwo').value;



answer = firstinput+secondinput;
document.getElementById("answer").innerHTML=answer;

}
