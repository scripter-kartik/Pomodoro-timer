let promodoroElement = document.getElementById("promodoro");
let shortBreakElement = document.getElementById("shortBreak");
let longBreakElement = document.getElementById("longBreak");
const timerElement = document.querySelector(".timer");
const startElement = document.getElementById("start");
let buttonsE1 = document.querySelector(".buttons");


let clickedButtonTimer;
let timeLeft = [1500, 300, 600];
let time;
let isPaused = false;

function startTimer() {
    if (!isPaused) {
        startElement.textContent = "pause";
        isPaused = true;
        updateTimer();
    }
    else {
        isPaused = false;
        startElement.textContent = "start";
    }

}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(time);
        startElement.textContent = "start";
        timerElement.textContent = "times up";
        isRunning = false;
        return;
    }
    else if (isPaused) {

        promodoroElement.onclick = () => {
            setInterval(() => {
                console.log("hi")
                clickedButtonTimer = 1
                timeLeft[0]--;
                const minutes = Math.floor(timeLeft[0] / 60);
                const seconds = timeLeft[0] % 60;
                timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);
        }

        shortBreakElement.onclick = () => {
            setInterval(() => {
                console.log("hil")
                clickedButtonTimer = 2
                timeLeft[1]--;
                const minutes = Math.floor(timeLeft[1] / 60);
                const seconds = timeLeft[1] % 60;
                timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          
            }, 1000);
        }

        longBreakElement.onclick = () => {
            setInterval(() => {
                console.log("hiblo")
                clickedButtonTimer = 3
                timeLeft[2]--;
                const minutes = Math.floor(timeLeft[2] / 60);
                const seconds = timeLeft[2] % 60;
                timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          
            }, 1000);
        }
        
    }
};

startElement.addEventListener('click', startTimer);
