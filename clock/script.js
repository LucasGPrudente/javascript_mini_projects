const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"];
const daysOfWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

showTime();
showDate();

function showTime() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  document.getElementById('hours').innerHTML = (hour < 10) ? "0" + hour : hour;
  document.getElementById('minutes').innerHTML = (minute < 10) ? "0" + minute : minute;
  document.getElementById('seconds').innerHTML = (second < 10) ? "0" + second : second;
}

function showDate() {
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfWeek = date.getDay();

  document.getElementById('date').innerHTML = daysOfWeek[dayOfWeek] + ",\xa0\xa0" + day + "\xa0\xa0" + months[month] + "\xa0\xa0" + year;
}

setInterval(() => {
  showTime()
}, 1000);

setInterval(() => {
  showDate()
}, 60 * 1000);