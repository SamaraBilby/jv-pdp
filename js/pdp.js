// slider-info 
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

//slider-desktop

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
        rewind: true,
        autoScroll: {
            speed: -1,
        },
    }).mount();
});

// slider-mobile

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
        rewind: true,
        autoScroll: {
            speed: -1,
        },
    }).mount();
});