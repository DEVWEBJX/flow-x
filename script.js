// FLOW X — comportamento do site
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const menu = document.getElementById("menu");
const nav = document.getElementById("navLinks");

menu.addEventListener("click", () => {
  const aberto = nav.dataset.open === "true";

  if (aberto) {
    nav.removeAttribute("style");
    nav.dataset.open = "false";
    return;
  }

  Object.assign(nav.style, {
    display: "flex",
    position: "absolute",
    top: "76px",
    left: "0",
    right: "0",
    padding: "22px",
    flexDirection: "column",
    alignItems: "stretch",
    background: "#09070c",
    borderBottom: "1px solid rgba(255,255,255,.12)"
  });

  nav.dataset.open = "true";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 950) {
      nav.removeAttribute("style");
      nav.dataset.open = "false";
    }
  });
});

// ============================================================
// CONFIGURAÇÃO RÁPIDA
// Troque somente o número abaixo pelo WhatsApp real da FLOW X.
// Formato: país + DDD + número, sem espaços ou símbolos.
// Exemplo: 5511999999999
// ============================================================
const WHATSAPP_FLOWX = "5500000000000";

const mensagem =
  "Olá! Vim pelo site da FLOW X e quero conhecer as soluções de comunicação e marca.";

document.getElementById("whatsapp").href =
  `https://wa.me/${WHATSAPP_FLOWX}?text=${encodeURIComponent(mensagem)}`;
