// JavaScript Document

// Score
var score = 0;
var frame = 0;

// Generators
var nut = 0;
var spaghett = 0;
var mistabean = 0;
var robloks = 0;
var flex_tape = 0;
var de_wae = 0;

function memeclicker() {
	if( frame == 5 ) { frame = 0; }
		else { frame = frame + 1; }
	score = score + 1;
	update_values();
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
		case "robloks":
			if( score >= 10000 ) {
				score -=10000;
				robloks++;
			}
			else {
				alert("not enough money!");
			}
			break;
		case "flex_tape":
			if( score >= 100000 ) {
				score -=100000;
				flex_tape++;
			}
			else {
				alert("not enough money!");
			}
			break;
		case "de_wae":
			if( score >= 1000000 ) {
				score -=1000000;
				de_wae++;
			}
			else {
				alert("not enough money!");
			}
			break;
	}
	update_values();
}

// Generation
window.onload = function() {
	// start looping the generator
	setInterval(bonus, 500);
	setInterval(nutbonus, 5000);
	// load cookies if they exist (they dont) (yet)
};

function bonus() {
	score += spaghett + (mistabean * 10) + (robloks * 100) + (flex_tape * 1000) + (de_wae * 10000);
	update_values();
}

function nutbonus() {
	score += nut;
	update_values();
}

function update_values() {
	document.getElementById("score").value=Math.floor(score);
}