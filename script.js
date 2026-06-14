const track = document.querySelector(".slider-track");
const gallery = document.querySelector(".gallery")
const cards = gallery.querySelectorAll(".card");

let index = 0;

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  update();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  update();
});