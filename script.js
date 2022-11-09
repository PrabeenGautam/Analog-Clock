const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

const date = new Date();
updateClock(date.getHours(), date.getMinutes(), date.getSeconds());

function updateClock(hours, minutes, seconds) {
  secondsContainer.style.transform = `rotate(${seconds * 6}deg)`;
  minutesContainer.style.transform = `rotate(${minutes * 6}deg)`;
  hoursContainer.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
}

setInterval(() => {
  const date = new Date();
  updateClock(date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);
