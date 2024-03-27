const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const alarmTimeInput = document.getElementById('alarmTime');
const bgmInput = document.getElementById('bgmInput');
const setAlarmBtn = document.getElementById('setAlarmBtn');
const alarmMessageElement = document.getElementById('alarmMessage');
const alarmSound = document.getElementById('alarmSound');

let alarmTime = null;
let alarmInterval = null;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // Check if the alarm time matches the current time exactly
    if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes && now.getSeconds() === 0) {
        playAlarm();
    }
}


function playAlarm() {
    alarmMessageElement.textContent = 'Alarm is ringing!';
    alarmSound.play();

    // Show alert dialog to stop the alarm
    alarmInterval = setInterval(function() {
        const isAlarmStopped = confirm('Alarm is ringing! Do you want to stop it?');
        if (isAlarmStopped) {
            stopAlarm();
        }
    }, 1000);
}

function stopAlarm() {
    clearInterval(alarmInterval);
    alarmMessageElement.textContent = '';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

setInterval(updateClock, 1000);

setAlarmBtn.addEventListener('click', function() {
    const alarmTimeString = alarmTimeInput.value;
    if (alarmTimeString) {
        const [hours, minutes] = alarmTimeString.split(':').map(Number);
        alarmTime = { hours, minutes };
        alarmMessageElement.textContent = '';

        if (bgmInput.files.length > 0) {
            const bgmFile = bgmInput.files[0];
            const bgmURL = URL.createObjectURL(bgmFile);
            alarmSound.src = bgmURL;
        }
    }
});
