// Selecting elements
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let timer = null; // Timer reference
let elapsedTime = 0; // Time in seconds

// Function to update time
function updateTime() {
  elapsedTime += 1;
  
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  // Display time in HH:MM:SS format
  timeDisplay.textContent = 
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Start button event
startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(updateTime, 1000); // Update every second
  }
});

// Pause button event
pauseBtn.addEventListener("click", () => {
  clearInterval(timer); // Pause timer
  timer = null;
});

// Reset button event
resetBtn.addEventListener("click", () => {
  clearInterval(timer); // Stop timer
  timer = null;
  elapsedTime = 0; // Reset time
  timeDisplay.textContent = "00:00:00"; // Reset display
});
