// JavaScript Document

// Score
var score = 0;
var x = 0;

function memeclicker() {
	if( x == 5 ) { x = 0; }
		else { x = x + 1; }
	score = score + 1;
	document.getElementById("score").value=score;
	document.getElementById("ugandan").firstChild.setAttribute("src", "frames/" + x + ".png");
} 