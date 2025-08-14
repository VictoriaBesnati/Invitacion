const targetDate = new Date("2025-10-18T21:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // inicial

const botonMusica = document.getElementById("boton-musica");
const audio = document.getElementById("musica");
let reproduciendo = true;

// ---------- CONTROL DE MÚSICA ----------
const audio = document.getElementById('musica');
const playPauseBtn = document.getElementById('playPauseBtn');

// Para cumplir con la política de los navegadores
document.body.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(err => console.log('No se pudo reproducir automáticamente:', err));
    }
}, { once: true });

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸'; // Cambia a ícono pausa
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶'; // Cambia a ícono play
    }
});
