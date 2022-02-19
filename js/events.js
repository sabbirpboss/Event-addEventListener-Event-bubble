//method 01 *** uses most of the time
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
//anonymous function
const tomatoButton = document.getElementById("make-tomato-button");
tomatoButton.onclick = function makeTomato() {
  document.body.style.backgroundColor = 'tomato';
};

//method - 04
//using addEventListener on a button
const greenButton = document.getElementById("make-green-button");
greenButton.addEventListener('click', makeGreen) 
function makeGreen() {
  document.body.style.backgroundColor = 'green';
}

//method - 05
const orangeButton = document.getElementById('make-orange-button');
orangeButton.addEventListener('click',  function makeGreen() {
  document.body.style.backgroundColor = 'orange';
})

//method - 06 *** uses most of the time
//direct shortcurt
document.getElementById('make-indigo-button').addEventListener('click', function makeIndigo() {
  document.body.style.backgroundColor = 'indigo';
})

//===============eventcommon.html================

function justFunction() {
  const p = document.getElementById('clicking-method');
  p.innerText = 'set by using just function';
}

//using direct event handler
document.getElementById('direct-event-handler').addEventListener('click', function () {
  const p = document.getElementById('clicking-method');
  p.innerText = 'direct event handler function'
})

//direct comment function
document.getElementById('comment').addEventListener('click', function () {
  const commentField = document.getElementById('comment-field');

  const p = document.getElementById('clicking-method');
  p.innerText = commentField.value; //value for input field
  commentField.value = ''; //white space for clear input field after update
})