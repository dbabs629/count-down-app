let daysRemaining;
let hoursRemaining;
let minutesRemaining;
let secondsRemaining;
let millisecondsRemaining;
let minutePrev;
let dayFlap = document.getElementById("day-flip-flap");
let hourFlap = document.getElementById("hour-flip-flap");
let minuteFlap = document.getElementById("minute-flip-flap");
let secondFlap = document.getElementById("second-flip-flap");
let endTime;
let currentTime;
let timeLeft;

let timeChange = setInterval(function() {
    endTime = new Date("Dec 31, 2021 23:59").getTime();
    currentTime = new Date().getTime() - 120000;                //Offset 2 minutes
    timeLeft = endTime - currentTime;
    daysRemaining = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hoursRemaining = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / (1000));
    milliSecondsRemaining = Math.floor(timeLeft % 1000);
    document.getElementById("day-number").innerHTML = daysRemaining;
    document.getElementById("hour-number").innerHTML = hoursRemaining;
    document.getElementById("minute-number").innerHTML = minutesRemaining;
    document.getElementById("second-number").innerHTML = secondsRemaining;
    minutePrev = minutesRemaining;
    // console.log(daysRemaining + " Days " + hoursRemaining + " Hours " + minutesRemaining + " Minutes " + secondsRemaining + " Seconds");
    //set a 2000 second interval to test the function
    // let timeTest = currentTime + 2000;
    myFunction(dayFlap, hourFlap, minuteFlap, secondFlap);
}, 1);

function myFunction(dayFlap, hourFlap, minuteFlap, secondFlap){
    if (milliSecondsRemaining == 0){
      secondFlap.style.animation = "flip-flap 1s infinite";
      console.log("Second flip: Next Second");
    } else if (secondsRemaining == 0){
      console.log("Minute flip: Next minute");
      minuteFlap.style.animation = "flip-flap 1s 1";
    } else if (minutesRemaining == 0){
      console.log("Hour flip: Next hour");
      hourFlap.style.animation = "flip-flap 1s 1";
    } else if (hoursRemaining == 0) {
      console.log("Day flip: Next day");
      dayFlap.style.animation = "flip-flap 1s 1";
    } else {
    }
  }