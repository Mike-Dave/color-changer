"use strict";
const item = document.querySelectorAll(".item");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const h = document.querySelector(".h");
const body = document.querySelector("body");
const space = document.querySelector(".space");
let hLetterContent = (h.textContent = "h");
let spaceContent = (space.textContent = "space");
const aLetterBehaviour = function () {
  a.classList.toggle("a-additional");
  s.classList.remove("s-additional");
  d.classList.remove("d-additional");
  h.classList.remove("h-additional");
  space.classList.remove("space-additional");
  backgroundColorChanger();
};
const sLetterBehaviour = function () {
  a.classList.remove("a-additional");
  s.classList.toggle("s-additional");
  h.classList.remove("h-additional");
  d.classList.remove("d-additional");
  space.classList.remove("space-additional");
  backgroundColorChanger();
};
const dLetterBehaviour = function () {
  d.classList.toggle("d-additional");
  a.classList.remove("a-additional");
  s.classList.remove("s-additional");
  h.classList.remove("h-additional");
  space.classList.remove("space-additional");
  backgroundColorChanger();
};
const hLetterBehaviour = function () {
  h.classList.toggle("h-additional");
  hLetterContent =
    hLetterContent === (h.textContent = "h")
      ? (h.textContent = "hello")
      : (h.textContent = "h");
  d.classList.remove("d-additional");
  a.classList.remove("a-additional");
  s.classList.remove("s-additional");
  space.classList.remove("space-additional");
  backgroundColorChanger();
};
const spaceLetterBehaviour = function () {
  space.classList.toggle("space-additional");
  h.classList.remove("h-additional");
  d.classList.remove("d-additional");
  a.classList.remove("a-additional");
  s.classList.remove("s-additional");
  backgroundColorChanger();
  spaceContent =
    spaceContent === (space.textContent = "space")
      ? (space.textContent = "asdh")
      : (space.textContent = "space");
};
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (e) {
    console.log(e);
    const itemCurrentTarget = e.currentTarget.classList;
    console.log(e.currentTarget.classList);

    if (itemCurrentTarget.contains("a")) {
      aLetterBehaviour();
    } else if (itemCurrentTarget.contains("s")) {
      sLetterBehaviour();
    } else if (itemCurrentTarget.contains("d")) {
      dLetterBehaviour();
    } else if (itemCurrentTarget.contains("h")) {
      hLetterBehaviour();
    }
  });
}
space.addEventListener("click", function () {
  spaceLetterBehaviour();
});
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "a") {
    aLetterBehaviour();
  } else if (e.key === "s") {
    sLetterBehaviour();
  } else if (e.key === "d") {
    dLetterBehaviour();
  } else if (e.key === "h") {
    hLetterBehaviour();
  } else if (e.key === " ") {
    spaceLetterBehaviour();
  }
});

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNum() {
  return Math.trunc(Math.random() * arr.length);
}
function backgroundColorChanger() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + arr[randomNum()];
    console.log(color);

    const ig = (body.style.backgroundColor = color);
    switch (ig) {
      case "#913175":
        body.style.backgroundColor = "coral";
        break;
      case "#f9f54b":
        body.style.backgroundColor = "coral";
        break;
      case "#f99417":
        body.style.backgroundColor = "coral";
        break;
      case "#fbc252":
        body.style.backgroundColor = "coral";
        break;
      case "#20262e":
        body.style.backgroundColor = "coral";
        break;
    }
  }
}
