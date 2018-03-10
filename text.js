function timeInput() {
    var x, text;

    x = document.getElementById("time").value;
    // If x is Not a Number
   if(isNaN(x)){
      text = "Input not valid";
      document.getElementById("alert").style.color = "red";
    }

    else if (x == "" || x > 24) {
      text = "Enter a number between 0 and 24";
      document.getElementById("alert").style.color = "red";
    } 

    else if (x >=0 && x < 12) {
      text = "Good morning";
      document.getElementById("alert").style.color = "blue";
      document.body.style.backgroundColor = 'yellow';
    } 

    else if (x >= 12 && x <= 17) {
      text = "Good afternoon";
      document.getElementById("alert").style.color = "white";
      document.body.style.backgroundColor = 'green';
    }
    else if (x > 17 && x <= 22) {
      text = "Good evening";
      document.getElementById("alert").style.color = "black";
       document.body.style.backgroundColor = 'orange';
    }
    else {
      text = "Good night";
      document.getElementById("alert").style.color = "orange";
      document.body.style.backgroundColor = 'gray';
    }
      document.getElementById("alert").innerHTML = text;
}

function myRefresh() {
    location.reload();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    var myDate = new Date();
    if(myDate.getHours()<12){
      document.getElementById('welcome').innerHTML = "Good morning user";
      document.body.style.background = "url('city-sunset-sunrise-lens-flare.jpg')";
      document.getElementById('a1').style.color = "white";
      document.getElementById('a2').style.color = "white";
      document.getElementById('a3').style.color = "white";
      document.getElementById("afternoon").style.display = "none";
      document.getElementById("evening").style.display = "none";
      document.getElementById("morning").style.visibility = "visible"; 
    }
    else if(myDate.getHours()>=12 && myDate.getHours()<=17){
      document.getElementById('welcome').innerHTML = "Good afternoon user";
      document.body.style.background = "url('pexels-photo-30360.jpg')";
      document.getElementById('a1').style.color = "white";
      document.getElementById('a2').style.color = "white";
      document.getElementById('a3').style.color = "white";
      document.getElementById("morning").style.display = "none";
      document.getElementById("evening").style.display = "none";
      document.getElementById("afternoon").style.visibility = "visible"; 
    }
    else if(myDate.getHours()>17 && myDate.getHours()<=24){
      document.getElementById('welcome').innerHTML = "Good evening user";
      document.body.style.backgroundImage = "url('pexels-photo-141673.jpeg')";
      document.getElementById('a1').style.color = "white";
      document.getElementById('a2').style.color = "white";
      document.getElementById('a3').style.color = "white";
      document.getElementById("morning").style.display = "none";
      document.getElementById("afternoon").style.display = "none";
      document.getElementById("evening").style.visibility = "visible"; 
    }
    else{
      document.getElementById('welcome').innerHTML = "Good night user";
      document.body.style.backgroundColor = 'gray';
      document.getElementById("morning").style.display = "none";
      document.getElementById("afternoon").style.display = "none";
      document.getElementById("evening").style.display = "none";
    }
  }

function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

var myVar;
function mySpinner() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}