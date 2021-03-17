// video button code
const video = document.getElementById("myVideo");
const btn = document.getElementById("myBtn");

function playPause() {
    if (video.paused) {
      video.play();
      btn.innerHTML = `<i class="bi bi-pause-circle"></i>`;
    } else {
      video.pause();
      btn.innerHTML = `<i class="bi bi-play-circle"></i>`;
    }
  }

// slider code
new Swiper('.swiper-container',{
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true,
  spaceBetween: 15,
  initialSlide: 1,
  loop: true,

  autoplay: {
    delay: 3000,
    disabledOnInteraction: true
  },

  speed: 800,


});