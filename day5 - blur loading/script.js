const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// console.log(loadText);

let load = 0;

blurring = () => {
  load++;
  if (load > 99) clearInterval(int);
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${
    scale(load, 0, 100, 1, 0) * 5
  }rem) brightness(${scale(load, 0, 100, 0.75, 0.5)})`;
};
let int = setInterval(blurring, 20);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
