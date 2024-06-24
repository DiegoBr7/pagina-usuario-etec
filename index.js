document.getElementById('radio1').checked = true;
let counter = 1;

setInterval(() => {
  nextImage();
}, 4000);

function nextImage () {
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  document.getElementById('radio' + counter).checked = true;
}


// __________________________________________________________________________

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});