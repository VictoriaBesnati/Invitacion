document.addEventListener("DOMContentLoaded", () => {
  /* ------------------ COUNTDOWN ------------------ */
  const countDownDate = new Date("Oct 18, 2025 21:00:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownContainer = document.querySelector(".countdown");

  function updateCountdown() {
    const now = Date.now();
    const distance = countDownDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (countdownContainer) countdownContainer.innerHTML = "¡Es el gran día!";
      return;
    }

    const sec = Math.floor(distance / 1000);
    const min = Math.floor(sec / 60);
    const hrs = Math.floor(min / 60);
    const days = Math.floor(hrs / 24);

    if (daysEl) daysEl.textContent = String(days);
    if (hoursEl) hoursEl.textContent = String(hrs % 24).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(min % 60).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(sec % 60).padStart(2, "0");
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();

  /* ------------------ REVEAL + MÚSICA ------------------ */
  const abrirBtn = document.getElementById("abrir-tarjeta");
  const portada = document.getElementById("portada");
  const tarjeta = document.getElementById("tarjeta");

  const botonMusica = document.getElementById("boton-musica");
  const audio = document.getElementById("musica");

  // Estado inicial del botón según el audio
  let reproduciendo = !audio.paused && !audio.ended;
  if (botonMusica) {
    botonMusica.textContent = reproduciendo ? "⏸" : "▶";
  }

  // Abrir invitación
  if (abrirBtn) {
    abrirBtn.addEventListener("click", () => {
      if (portada) portada.style.display = "none";
      if (tarjeta) tarjeta.classList.add("visible");

      // Intentar reproducir al haber interacción del usuario
      audio.play().then(() => {
        reproduciendo = true;
        if (botonMusica) botonMusica.textContent = "⏸";
      }).catch(() => {
        // Si el navegador sigue bloqueando, el usuario podrá tocar el botón ▶
        reproduciendo = false;
        if (botonMusica) botonMusica.textContent = "▶";
      });
    });
  }

  // Play / pausa manual
  if (botonMusica) {
    botonMusica.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => {
          reproduciendo = true;
          botonMusica.textContent = "⏸";
        }).catch(() => {/* ignoramos */});
      } else {
        audio.pause();
        reproduciendo = false;
        botonMusica.textContent = "▶";
      }
    });
  }
    // Forzar scroll arriba al cargar
  window.scrollTo(0, 0);
});
