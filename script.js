const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (window.lucide) {
  window.lucide.createIcons();
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? "menu" : "x"}" aria-hidden="true"></i>`;
  siteNav.classList.toggle("is-open", !isOpen);
  if (window.lucide) window.lucide.createIcons();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const activeHref = `#${entry.target.id}`;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === activeHref));
  });
}, { rootMargin: "-32% 0px -58% 0px" });

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Your details are ready, but no delivery service is connected yet.";
  formStatus.className = "form-note is-success";
});