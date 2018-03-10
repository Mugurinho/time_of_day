function showquoteAfternoon(){
	var quotes1=new Array();
	quotes1[0] = "Good afternoon user";
	quotes1[1] = "Lunch time :)";
	quotes1[2] = "Would you like a second cofee?";
	quotes1[3] = "Have a break, check the weather";
	var q1 = quotes1.length;
	var whichquote1 = Math.round(Math.random()*(q1-1));

	function randomAfternoon() {
	  var rand1 = Math.floor(Math.random()*quotes1.length);
	  document.getElementById('afternoonMsg').innerHTML=quotes1[rand1];
	}
	onload = function() { startTime(); randomAfternoon(); }
	var inter1 = setInterval(function() { randomAfternoon(); }, 6000);
	/*hardcoded messages function working with the above quotes*/
    document.getElementById('afternoonMsg').innerHTML = quotes1[whichquote1];
}
showquoteAfternoon();