timerGreen();

function timerGreen(){
  timer(15);

  greenOn();
  yellowOff();
  redOff();

  setTimeout(() => {timerYellow()}, 16 * 1000);
}

function timerYellow(){
  timer(5);

  greenOff();
  yellowOn();
  redOff();

  setTimeout(() => {timerRed()}, 6 * 1000);
}

function timerRed(){
  timer(15);

  greenOff();
  yellowOff();
  redOn();

  setTimeout(() => {timerGreen()}, 16 * 1000);
}

function timer(time){
  document.getElementById('timer').innerHTML = (time < 10) ? "0" + time : time;
  time--;

  let interval = setInterval(() => {
    document.getElementById('timer').innerHTML = (time < 10) ? "0" + time : time;
    time--;
    if(time < 0){
      clearInterval(interval);
    }
  }, 1000);
}

function greenOn(){
  document.getElementById('greenLight').style.backgroundColor = '#60c904';
  document.getElementById('greenLight').style.boxShadow = '0px 0px 15px #60c904';
}

function greenOff(){
  document.getElementById('greenLight').style.backgroundColor = '#006400';
  document.getElementById('greenLight').style.boxShadow = 'none';
}

function yellowOn(){
  document.getElementById('yellowLight').style.backgroundColor = '#e5de00';
  document.getElementById('yellowLight').style.boxShadow = '0px 0px 15px #e5de00';
}

function yellowOff(){
  document.getElementById('yellowLight').style.backgroundColor = '#cd8d00';
  document.getElementById('yellowLight').style.boxShadow = 'none';
}

function redOn(){
  document.getElementById('redLight').style.backgroundColor = '#ff2c2c';
  document.getElementById('redLight').style.boxShadow = '0px 0px 15px #ff2c2c';
}

function redOff(){
  document.getElementById('redLight').style.backgroundColor = '#8b0000';
  document.getElementById('redLight').style.boxShadow = 'none';
}