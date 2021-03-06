const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const CLICKED = "clicked";

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function handleClick() {
  clockTitle.classList.toggle(CLICKED);
  // clockTitle.innerText = `I love you, ${USER_NAME} 💓`;
}

function init() {
  getTime();
  clockTitle.addEventListener("click", handleClick);
  setInterval(getTime, 1000);
}

init();