const boxElements = document.querySelectorAll(".box");

boxElements.forEach((element) => {
  element.addEventListener("click", animateBox);
  element.addEventListener("animationend", resetBox);
});

function animateBox(event) {
  const boxNumber = event.target.dataset.boxNumber;
  event.target.classList.add(`animation-${boxNumber}`);
}

function resetBox(event) {
  const boxNumber = event.target.dataset.boxNumber;
  event.target.classList.remove(`animation-${boxNumber}`);
}
