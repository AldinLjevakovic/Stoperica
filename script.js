const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let startTime;
let stopwatchInterval;
let pausedTime = 0;

function updateStopwatch() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
  let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").innerHTML = displayTime;
}

start.addEventListener("click", function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - pausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
});

stop.addEventListener("click", function stopStopwatch() {
  clearInterval(stopwatchInterval);
  pausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
});

reset.addEventListener("click", function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  pausedTime = 0;
  document.getElementById("stopwatch").innerHTML = "0:00:00";
});

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}
