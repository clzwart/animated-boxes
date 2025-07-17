const boxElement = document.querySelectorAll(".box");

boxElement.forEach((element) => {
  element.addEventListener("click", rotateBox);
  element.addEventListener("animationend", resetBox);
});

// function rotateBox(event) {
//   event.target.classList.add("animation-1");
// }

// function resetBox(event) {
//   event.target.classList.remove("animation-1");
// }

function rotateBox(event) {
  event.target.classList.add("animation-3");
}

function resetBox(event) {
  event.target.classList.remove("animation-3");
}
