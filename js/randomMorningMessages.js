function showquoteMorning(){
	var quotes=new Array();
	quotes[0] = "Good morning user";
	quotes[1] = "Breakfast time :)";
	quotes[2] = "Would you like a cofee?";
	quotes[3] = "Have a break, have a KitKat";
	var q = quotes.length;
	var whichquote = Math.round(Math.random()*(q-1));

	function randomMorning() {
	  var rand = Math.floor(Math.random()*quotes.length);
	  document.getElementById('morningMsg').innerHTML=quotes[rand];
	}
	onload = function() { startTime(); randomMorning(); }
	var inter = setInterval(function() { randomMorning(); }, 30000);
	/*hardcoded messages function working with the above quotes*/
    document.getElementById('morningMsg').innerHTML = quotes[whichquote];
}
showquoteMorning();