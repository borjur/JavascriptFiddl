// JavaScript Date Arithmetic
var msg = document.getElementById("message");

var dateNow = new Date();
var date2020 = new Date(2020,0,1);

var days2020 = Math.ceil((date2020 - dateNow ) / 86400000);
var date7days = "?";

msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days +"</p>";


var d = new Date();
d.setFullYear(2012);
d.setMonth(2);
d.setHours(34);

alert(d);