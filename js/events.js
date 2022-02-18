//method 01
//standard system for call a function-event handler
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//method - 02
const blueButton = document.getElementById("make-blue-button");
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//method - 03
const tomatoButton = document.getElementById("make-tomato-button");
tomatoButton.onclick = function makeTomato() {
  document.body.style.backgroundColor = 'tomato';
};