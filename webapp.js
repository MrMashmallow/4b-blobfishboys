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

//frame movment for the ugandan warrior
function memeclicker() {
	if( frame == 5 ) { frame = 0; }
		else { frame = frame + 1; }
	score = score + 1;
	update_values();
	document.getElementById("ugandan").firstChild.setAttribute("src", "frames/" + frame + ".png");
}

function buy(sel) {
	switch(sel) {
		//tells the value for the nut and its function
		case "nut":
			if( score >= 10 ) {
				score -=10;
				nut++;
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for the spaghett and its function
		case "spaghett":
			if( score >= 100 ) {
				score -=100;
				spaghett++;
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for mistabean and its function
		case "mistabean":
			if( score >= 1000 ) {
				score -=1000;
				mistabean++;
			}
			 //alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for robloks and its function
		case "robloks":
			if( score >= 10000 ) {
				score -=10000;
				robloks++;
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for the flex_tape and its function
		case "flex_tape":
			if( score >= 100000 ) {
				score -=100000;
				flex_tape++;
			}
			//alerts the player they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//tells the value for de_wae and its function
		case "de_wae":
			if( score >= 1000000 ) {
				score -=1000000;
				de_wae++;
			}
			//alerts the player they do not have enough currency
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
	setInterval(bonus, 5);
	// load cookies if they exist (they dont) (yet)
};

function bonus() {
	score += nut * 0.001 + spaghett *0.01 + mistabean * 0.1 + robloks + flex_tape * 10 + de_wae * 100;
	update_values();
}

function update_values() {
	document.getElementById("score").value=Math.floor(score);
}

function resetGame() {
	// if cookies are implemented this needs to be modified!!
	
}