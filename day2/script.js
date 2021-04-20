const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let curActive = 1;

next.addEventListener("click", () => {
  curActive++;
  if (curActive > 4) {
    curActive = 4;
  }
  update();
});
prev.addEventListener("click", () => {
  curActive--;
  if (curActive < 1) {
    curActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, i) => {
    if (i < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progress.style.width = ((curActive - 1) / (circles.length - 1)) * 100 + "%";

  if (curActive === 1) {
    prev.disabled = true;
  } else if (curActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
