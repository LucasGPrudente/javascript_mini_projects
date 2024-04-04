reset();

// Units of time (number)
var min;
var sec;
var ms;
var hr;

// Time (interval)
var time;

// Stop interval and reset variables
function reset(){
  clearInterval(time);

  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;

  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
  milliseconds.innerText = "00";

  document.getElementById("btnStart").style.display = "flex";
  document.getElementById("btnStop").style.display = "none";
}

// Create interval and initialize the stopwatch
function start(){
  time = setInterval(() => {
    countMilliseconds()
  }, 10);

  document.getElementById("btnStart").style.display = "none";
  document.getElementById("btnStop").style.display = "flex";
}

// Stop interval
function stop(){
  clearInterval(time);

  document.getElementById("btnStart").style.display = "flex";
  document.getElementById("btnStop").style.display = "none";
}

// Counts milliseconds. When reaching 100, ms = 0 and sec + 1
function countMilliseconds(){
  ms++;

  if(ms > 99){
    ms = 0;
    milliseconds.innerText = "00";
    countSeconds();
    return;
  }

  milliseconds.innerText = ms < 10 ? "0" + ms : ms;
}

// Counts seconds. When reaching 60, sec = 0 and min + 1
function countSeconds(){
  sec++;

  if(sec > 59){
    sec = 0;
    seconds.innerText = "00";

    countMinutes();
    return;
  }

  seconds.innerText = (sec < 10) ? "0" + sec : sec;
}

// Counts minutes. When reaching 60, min = 0 and hr + 1
function countMinutes(){
  min++;

  if(min > 59){
    min = 0;
    minutes.innerText = "00";

    countHours();
    return;
  }

  minutes.innerText = (min < 10) ? "0" + min : min;
}

// Counts hours. When reaching 100, reset the stopwatch
function countHours(){
  hr++;

  if(hr > 99){
    alert('The time limit has been reached, the stopwatch has been reset.');
    reset();
    return;
  }

  hours.innerText = (hr < 10) ? "0" + hr : hr;
}
