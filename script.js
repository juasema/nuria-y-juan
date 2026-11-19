const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

// Cuando tengáis el formulario de Tally, pegad aquí su enlace público.
// Ejemplo: const TALLY_URL = "https://tally.so/r/XXXXXXXX";
const TALLY_URL = "";
const rsvpLink = document.getElementById("rsvp-link");
const formNote = document.querySelector(".form-note");

if (TALLY_URL) {
  rsvpLink.href = TALLY_URL;
  rsvpLink.target = "_blank";
  rsvpLink.rel = "noopener";
  formNote.textContent = "Se abrirá el formulario seguro de confirmación en una nueva pestaña.";
} else {
  rsvpLink.addEventListener("click", event => {
    event.preventDefault();
    alert("El formulario de confirmación se añadirá en el siguiente paso, cuando configuremos Tally.");
  });
}
