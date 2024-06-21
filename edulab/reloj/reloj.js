function startCountdown(targetDate, display) {
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            display.days.textContent = "0";
            display.hours.textContent = "0";
            display.minutes.textContent = "0";
            display.seconds.textContent = "0";
            alert("¡El tiempo ha terminado!");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        display.days.textContent = days;
        display.hours.textContent = hours;
        display.minutes.textContent = minutes;
        display.seconds.textContent = seconds;
    }, 1000);
}

window.onload = () => {
    const now = new Date().getTime();
    const sixDaysFromNow = now + 6 * 24 * 60 * 60 * 1000; // 6 días en milisegundos
    const display = {
        days: document.querySelector('#days'),
        hours: document.querySelector('#hours'),
        minutes: document.querySelector('#minutes'),
        seconds: document.querySelector('#seconds')
    };
    startCountdown(sixDaysFromNow, display);
};
