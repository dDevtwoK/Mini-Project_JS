const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  console.log(window.innerHeight);
  const triggerBottom = (window.innerHeight * 4.5) / 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
