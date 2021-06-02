const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const greetingText = greeting.querySelector("h4");

const USER_LS = "currentUser";
const SHOW = "showing";
let USER_NAME = "";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function showName(text) {
  greeting.classList.add(SHOW);

  const hours = new Date().getHours();
  if (hours < 12) { greetingText.innerText = `Good morning, ${text}`; }
  else if (hours < 18) { greetingText.innerText = `Good afternoon, ${text}`; }
  else { greetingText.innerText = `Good evening, ${text}`; };
}

function handleSubmit(event) {
  form.classList.remove(SHOW);
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  showName(currentValue);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  USER_NAME = currentUser;
  if (currentUser === null) {
    form.classList.add(SHOW);
    form.addEventListener("submit", handleSubmit);
  } else {
    showName(currentUser);
  }
}

function init() {
  loadName();
}

init();