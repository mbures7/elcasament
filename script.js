
function toggleMusic() {
  const audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

const countDownDate = new Date("2025-09-20T17:30:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const dist = countDownDate - now;
  document.getElementById("days").innerText = Math.floor(dist / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((dist / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((dist / 1000 / 60) % 60);
  document.getElementById("seconds").innerText = Math.floor((dist / 1000) % 60);
}, 1000);
