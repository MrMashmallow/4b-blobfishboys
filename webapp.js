// JavaScript Document

// Score
var score = 0;
var frame = 0;

// Generators
var nut = 0;
var spaghett = 0;
var mistabean = 0;

function memeclicker() {
	if( frame == 5 ) { frame = 0; }
		else { frame = frame + 1; }
	score = score + 1;
	document.getElementById("score").value=score;
	document.getElementById("ugandan").firstChild.setAttribute("src", "frames/" + frame + ".png");
}

function buy(sel) {
	switch(sel) {
		case "nut":
			if( score >= 10 ) {
				score -=10;
				nut++;
			}
			else {
				alert("not enough money!");
			}
			break;
		case "spaghett":
			if( score >= 100 ) {
				score -=100;
				spaghett++;
			}
			else {
				alert("not enough money!");
			}
			break;
		case "mistabean":
			if( score >= 1000 ) {
				score -=1000;
				mistabean++;
			}
			else {
				alert("not enough money!");
			}
			break;
	}
	document.getElementById("score").value=score;
}