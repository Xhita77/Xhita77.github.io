function updateCountdown() {
    const countdownDate = new Date('2023-11-30T00:00:00').getTime();
    const currentDate = new Date().getTime();
    const timeDifference = countdownDate - currentDate;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
