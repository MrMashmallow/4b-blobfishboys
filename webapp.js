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

//Ables the Ugandan warrior to move in frames after each click
function memeclicker() {
	if( frame == 5 ) { frame = 0; }
		else { frame = frame + 1; }
	score = score + 1;
	update_values();
	document.getElementById("ugandan").firstChild.setAttribute("src", "frames/" + frame + ".png");
}

function buy(sel) {
	switch(sel) {
		//tells the value of the nut and its function
		case "nut":
			if( score >= 10 ) {
				score -=10;
				nut++;
			}
			// alerts the player that they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
		
		//Tells the value of the spaghett and its function
		case "spaghett":
			if( score >= 100 ) {
				score -=100;
				spaghett++;
			}
		   // alerts the player that they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//Tells the value of mistabean and its function
		case "mistabean":
			if( score >= 1000 ) {
				score -=1000;
				mistabean++;
			}
		// alerts the player that they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//Tells the value of robloks and its function
		case "robloks":
			if( score >= 10000 ) {
				score -=10000;
				robloks++;
			}
       // alerts the player that they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//Tells the value of flex_tape and its function
		case "flex_tape":
			if( score >= 100000 ) {
				score -=100000;
				flex_tape++;
			}
	 // alerts the player that they do not have enough currency
			else {
				alert("not enough money!");
			}
			break;
			
			//Tells the value of de_wae and its function
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