const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const slider = document.querySelector("#slider");
const testimonial = document.querySelector(".testimonial");
let width = testimonial.clientWidth;
let i = 0;

next.addEventListener("click", () => {
  i++;
  if (i > 2) {
    i = 0;
  }
  slider.style.marginLeft = -(width * i) - 40 * i + "px";
  console.log(i);
  console.log(slider.style.marginLeft);
});
prev.addEventListener("click", () => {
  i--;
  if (i == 1) {
    slider.style.marginLeft = -740 + "px";
  }
  if (i == 2 || i == -1) {
    slider.style.marginLeft = -1480 + "px";
    i = 2;
  }
  if (i == 0) {
    slider.style.marginLeft = -0 + "px";
  }
});

let accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    let o = document.querySelector(".open");
    this.classList.toggle("open");

    this.children[1].classList.add("op-zero");
    this.children[1].classList.remove("op-uno");
    this.children[2].classList.remove("op-zero");
    this.children[2].classList.add("op-uno");

    if (o != null) {
      o.classList.remove("open");
      o.children[1].classList.remove("op-zero");
      o.children[1].classList.add("op-uno");
      o.children[2].classList.add("op-zero");
      o.children[2].classList.remove("op-uno");
    }
  });
}
