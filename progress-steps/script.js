const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let curActive = 0;

next.addEventListener("click", (e) => {
  curActive++;
  console.log(circles.length);
  curActive === circles.length && (curActive = circles.length);
  update();
});

prev.addEventListener("click", () => {
  curActive--;
  curActive < 0 && (curActive = 0);
  update();
});

const update = function (e) {
  circles.forEach((cir, i) => {
    if (i <= curActive) {
      cir.classList.add("active");
    } else {
      cir.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (curActive === 0) {
    prev.disabled = true;
  } else if (curActive === circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
