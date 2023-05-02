// Pretty pomodoro logic file

//

// This is the startup text
let originalPomodoroText = "....-.50.-.45.-.40.-.35.-.30.-.25.-.20.-.15.-.10.-.5.-.0"


//The startup text will "decrease" every minute until characters '- 30', which is like 24 characters from the left. Since the clock has to run 25 minutes it is perfect (Did not planned this).


// Function that starts the clock.
function startPomodoro() {
  
  let counter = 0;
  document.querySelector('#pomodoro-btn').innerHTML = 'Reset';
  document.querySelector('#pomodoro-btn').setAttribute('onclick', 'resetPomodoro()');

  const pomodoroInterval = setInterval(()=>{
    counter ++;
    if (counter <= 25) {
      originalPomodoroText = originalPomodoroText.slice(1);
      document.querySelector('#pomodoro-ticker').innerHTML = originalPomodoroText;
    } else {
      clearInterval(pomodoroInterval);
    }
  }, 1000 * 60 * 25)
}

function resetPomodoro() {

  // Clear all intervals
  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i);
    }
  }, 10);

  // Reset original pomodoro text.
  originalPomodoroText = "....-.50.-.45.-.40.-.35.-.30.-.25.-.20.-.15.-.10.-.5.-.0"
  // Reset ticker
  document.querySelector('#pomodoro-btn').innerHTML = 'Start';
  document.querySelector('#pomodoro-btn').setAttribute('onclick', 'startPomodoro()');
  document.querySelector('#pomodoro-ticker').innerHTML = originalPomodoroText;

}
