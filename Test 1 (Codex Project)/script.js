const header = document.querySelector(".site-header");
const form = document.querySelector(".lead-form");
const formNote = document.querySelector(".form-note");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "已收到咨询信息，我们会尽快为你整理专属行程方案。";
  form.reset();
});
