// Clock.

function updateClock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
}

updateClock(); // Without this the page would take a second to load the clock.
setInterval(updateClock, 1000); // This updates the clock every second.