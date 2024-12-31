
const display = document.getElementById('text');

let timer = null;       
let startTime = 0;        
let elapsedTime = 0;     
let isRunning = false;   

// Function to start the stopwatch
function start() {
    // Start only if the stopwatch is not already running
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(update, 10);     
        isRunning = true;                    
    }
}

// Function to stop the stopwatch
function stop() {
    // Stop only if the stopwatch is currently running
    if (isRunning) {
        clearInterval(timer);                 
        elapsedTime = Date.now() - startTime; 
        isRunning = false;                    
    }
}

// Function to reset the stopwatch to its initial state
function reset() {
    clearInterval(timer);                
    startTime = 0;                      
    elapsedTime = 0;                     
    isRunning = false;                   
    display.textContent = "00:00:00:00"; 
}

// Function to update the stopwatch display
function update() {
    const currentTime = Date.now();       
    elapsedTime = currentTime - startTime;

    // Calculate hours, minutes, seconds, and milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));        
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);     
    let seconds = Math.floor(elapsedTime / 1000 % 60);             
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);        

    // Format each time unit to be two digits with leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display with the formatted time string
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
