"use strict";

function createEl(tag, className, content) {
  let el = document.createElement(tag);
  if (className) {
    let classArray = className.split(" ");
    for (let cl of classArray) {
      el.classList.add(cl);
    }
  }
  content ? (el.innerText = content) : null;
  return el;
}
const container = createEl("div", "container");
const title = createEl("p2", "title", "Timer");
const wrapBtn = createEl("div", "wrapper__btn");
const startBtn = createEl("button", "btn start", "Start");
const stopBtn = createEl("button", "btn stop", "Stop");
const display = createEl("div", "display");
wrapBtn.append(startBtn, stopBtn);
container.append(title, wrapBtn, display);
const root = document.querySelector("#root");
root.append(container);

let count = localStorage.getItem("count") ?? 0;
console.log(String(count).length);
if (String(count).length === 1) {
  display.textContent = `0${count}`;
} else {
  display.textContent = count;
}
let timer;

function saveCount(data) {
  localStorage.setItem("count", data);
}

startBtn.addEventListener("click", () => {
  timer = setInterval(() => {
    count++;
    if (String(count).length === 1) {
      display.textContent = `0${count}`;
    } else {
      display.textContent = count;
    }
    saveCount(count);
  }, 1000);
  startBtn.style.pointerEvents = 'none';
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  startBtn.style.pointerEvents = 'auto';
});
