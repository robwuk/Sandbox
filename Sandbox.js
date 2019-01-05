
/*var elem = document.getElementById("name");

function person(name, age, color) {
  this.name = name;
}

function printDetail() {
  elem.innerHTML = p1.name;
}

var p1 = new person(prompt("Please Enter Your Name: "), 46, "Blue");

printDetail();

function changeColour() {
  var demo = document.getElementById("demo1");

  var selection = prompt("Do you want to change the colour (YES/NO):").toUpperCase();

  if (selection=="YES"){
    demo.style.color='#FF0000';
  }
}

changeColour();*/

function addParagraph(){
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("This is a new line of text - can I use this to populate a table from an array (and if I can populat ethe array from a CSV file I could simplify the preacher and events lists)");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo2");
  //adding the paragraph to the div
  div.appendChild(p);
}

addParagraph();

function addList(){
  var events = new Array("Sunday Service", "Girls Brigade","Guides","Coffee Mornings");

  var i=0;
  while (i<events.length){
    var el = document.createElement("li");
    var txt = document.createTextNode(events[i]);
    el.appendChild(txt);
    var ul = document.getElementById("list");
    ul.appendChild(el);
    i++;
  }
}

//window.onload=addList();

/*var t = setInterval(move, 10);
// starting position
var pos = 0;
//our box element
var box = document.getElementById("box");

function move() {
  if (pos>=150){
    clearInterval(t);
  }
  else {
    pos +=  1;
    box.style.left = pos+"px"; //px = pixels
  }
}*/

//event handler code
function show() {
  alert("Hi there");
}

var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);
btn.addEventListener("mouseover",show);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}



function change() {
 var x = document.getElementById("EnterName");
 x.value= x.value.toUpperCase();
}
