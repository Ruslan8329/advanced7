////////////////////////////////////////////////////////////////////////////////////////////

let slider = document.querySelector(".slider");
let ball = document.querySelector(".ball");

function ballSlider(e) {
  let position = e.clientX - slider.getBoundingClientRect().left;
  if (position < 0) {
    position = 0;
  }
  if (position > slider.offsetWidth) {
    position = slider.offsetWidth;
  }
  ball.style.left = position + "px";
}

slider.addEventListener("mousedown", (e) => {
  document.addEventListener("mousemove", ballSlider);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", ballSlider);
  });
  ballSlider(e);
});

///////////////////////////////////////////////////////////////////////////////////////////////

let index = 0;
let image = document.querySelectorAll("img");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let images = ["images/photo1.jpg", "images/photo2.webp", "images/photo3.jpg"];

function sliderFoto() {
  image.src = images[index];
  btn1.disabled = index === 0;
  btn2.disabled = index === images.length - 1;
}

btn1.addEventListener("click", () => {
  if (index > 0) {
    index -= 1;
  }
});

btn2.addEventListener("click", () => {
  if (index < images.length - 1) {
    index += 1;
  }
});
sliderFoto();
