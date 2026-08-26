const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "Abrir menu");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

/*
  TROQUE PELO NÚMERO OFICIAL DA FLOW X.
  Exemplo: 5511999999999
*/
const whatsappNumber = "5531991023510";
const whatsappMessage = encodeURIComponent(
  "Olá, FLOW X! Vim pelo site e gostaria de falar sobre um projeto."
);
const whatsapp = document.getElementById("whatsapp");
if (whatsapp) {
  whatsapp.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
}
/* =========================================
   FLOW X WEAR — LIGHTBOX
   ========================================= */

const wearImageWraps = document.querySelectorAll(".wear-image-wrap");
const wearLightbox = document.getElementById("wearLightbox");
const wearLightboxImage = document.getElementById("wearLightboxImage");
const wearLightboxClose = document.getElementById("wearLightboxClose");

if (wearImageWraps.length && wearLightbox && wearLightboxImage && wearLightboxClose) {

  wearImageWraps.forEach(wearImageWrap => {

    wearImageWrap.addEventListener("click", () => {
      const image = wearImageWrap.querySelector("img");

      if (image) {
        wearLightboxImage.src = image.src;
        wearLightboxImage.alt = image.alt;
      }

      wearLightbox.classList.add("active");
    });

  });

  wearLightboxClose.addEventListener("click", () => {
    wearLightbox.classList.remove("active");
  });

  wearLightbox.addEventListener("click", (event) => {
    if (event.target === wearLightbox) {
      wearLightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      wearLightbox.classList.remove("active");
    }
  });
}
