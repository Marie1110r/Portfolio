// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========== ACTIVE NAV LINK ==========
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ========== INTERACTION BULLES ==========
const bubbles = document.querySelectorAll(".bubble-lang");

bubbles.forEach((bubble) => {
  bubble.addEventListener("mouseenter", function () {
    this.style.animationPlayState = "paused";
  });

  bubble.addEventListener("mouseleave", function () {
    this.style.animationPlayState = "running";
  });

  // Effet de clic
  bubble.addEventListener("click", function () {
    const lang = this.querySelector(".lang-icon").textContent;
    console.log(`✨ Langage sélectionné: ${lang}`);
    // Tu peux ajouter une action ici (ex: ouvrir une modale avec infos)
  });
});

// ========== MESSAGE CONSOLE ==========
console.log(
  "%c🫧 Portfolio avec bulles animées !",
  "color: #BD83B8; font-size: 20px; font-weight: bold;"
);
