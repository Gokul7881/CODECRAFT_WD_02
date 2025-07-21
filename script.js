let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

startStopBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(stopwatch, 1000);
    isRunning = true;
  } else {
    clearInterval(interval);
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const lapTime = display.textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
});

// Initialize display on page load
updateDisplay();
