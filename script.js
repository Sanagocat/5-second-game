//1. string format : console. log('${date.getHours () } : ${date. getMinutes ()} ‘)
//2. setInterval(func, interval)
//3. const date = new Date()
//4. String(date.getHours()).padStart(2,’0’)
//5. show current time
//6. Make Calendar
//7. time to Christmas

var myTimer = document.getElementById("myTimer");
var stopButton = document.getElementById("stopButton");

stopButton.addEventListener("click",timerStop);

setInterval(timerClock, 10); //every msec execute function
let counter = 0;
let isStop = false;

function timerClock()
{
  //run only if isStop is false
  if (isStop== false)
  {
    counter=counter+10;
  
    let second = String(Math.floor(counter/1000));
    let msecond = String(counter % 1000).padStart(3,'0');
  
    //Math.ceil() : 소수점 올림, 정수 반환
    //Math.floor() : 소수점 버림, 정수 반환
    //Math.round() : 소수점 반올림, 정수 반환
    console.log(second + ":" + msecond);
  
    myTimer.innerText = second+" sec " + msecond+" msec ";
  }
}

function timerStop(){

  if (isStop==false)//when game is started -> isStop = false
  {
    isStop = true;
    stopButton.className="retryButton";
    stopButton.value = "RETRY";
    counter=0;
  }
  else //when game is stop -> isStop = true
  {
    isStop = false;
    stopButton.className = "stopButton";
    stopButton.value = "Stop";
  }
}








