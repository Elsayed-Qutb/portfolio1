// Set dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Smooth scroll ONLY on index.html
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetID = link.getAttribute("href");
      const targetElement = document.querySelector(targetID);
      if (!targetElement) return; // لو العنصر مش موجود، تجاهله
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Mobile nav toggle
const navToggleBtn = document.getElementById("nav-toggle");
const navLinksList = document.getElementById("nav-links");

if (navToggleBtn && navLinksList) {
  navToggleBtn.addEventListener("click", () => {
    const expanded = navToggleBtn.getAttribute("aria-expanded") === "true";
    navToggleBtn.setAttribute("aria-expanded", !expanded);
    navLinksList.classList.toggle("open");
  });
}

// Back button functionality
// Back button functionality
const backBtn = document.getElementById("back-btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (document.referrer) {
      window.history.back();
    } else {
      window.location.href = "index.html";
    }
  });
}
