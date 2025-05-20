const themeToggle = document.getElementById("theme-toggle");
const musicToggle = document.getElementById("music-toggle");
const audio = document.getElementById("bg-music");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

musicToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicToggle.textContent = "🔊";
  } else {
    audio.pause();
    musicToggle.textContent = "🔇";
  }
});

document.addEventListener('mousemove', function(e) {
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const offsetX = Math.random() * 20 - 10;
    const offsetY = Math.random() * 20 - 10;

    sparkle.style.left = e.pageX + offsetX + 'px';
    sparkle.style.top = e.pageY + offsetY + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
});

