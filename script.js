import Countdown from "./countdown.js";

const timeFuture = new Countdown("31 december 2022 GMT-0300 23:59:59");
const times = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  times.forEach((times, index) => {
    times.innerHTML = timeFuture.total[index];
  }); 
}

mostrarTempo();
setInterval(mostrarTempo, 1000);
