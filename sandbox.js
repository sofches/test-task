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