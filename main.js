// Smooth active-nav highlighting on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => observer.observe(s));

// Cart button feedback
document.querySelectorAll(".product-card .btn--sm").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const original = btn.textContent;
    btn.textContent = "Added!";
    btn.style.background = "#22c55e";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
    }, 1600);
  });
});
