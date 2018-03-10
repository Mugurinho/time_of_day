function showquoteEvening(){
	var quotes2 = new Array();
	quotes2[0] = "Good evening user";
	quotes2[1] = "Dinner time :)";
	quotes2[2] = "Would you like a tea?";
	quotes2[3] = "Have some fun, read a book";
	var q2 = quotes2.length;
	var whichquote2 = Math.round(Math.random()*(q2-1));

	function randomEvening() {
	  var rand2 = Math.floor(Math.random()*quotes2.length);
	  document.getElementById('eveningMsg').innerHTML=quotes2[rand2];
	}
	onload = function() { startTime(); randomEvening(); }
	var inter1 = setInterval(function() { randomEvening(); }, 10000);
	/*hardcoded messages function working with the above quotes*/
    document.getElementById('eveningMsg').innerHTML = quotes2[whichquote2];
}
showquoteEvening();