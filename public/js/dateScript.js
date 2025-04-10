//---- For 1) [The time] ----
updateDateTime(); //display the time right as the page loads

function updateDateTime() {
  var today = new Date();
  var date = today.toDateString();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (hours >= 0 && hours < 10) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("date").innerHTML =
    date + ", " + hours + ":" + minutes + ":" + seconds;
}

setInterval("updateDateTime()", 1000); //updates in real time

