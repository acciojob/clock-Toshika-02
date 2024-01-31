//your JS code here. If required.
 const timerElement = document.getElementById('timer');

function updateTimer() {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();

    timerElement.textContent = `${date} ${time}`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
