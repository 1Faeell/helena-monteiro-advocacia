// Initialize AOS
AOS.init({ duration: 800, once: true, offset: 100 });

// Header Scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  const icon = menuToggle.querySelector("i");
  icon.className = mobileMenu.classList.contains("active")
    ? "bi bi-x-lg"
    : "bi bi-list";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuToggle.querySelector("i").className = "bi bi-list";
  });
});

// Testimonial Slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".slide-dot");

function changeSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("bg-main"));
  dots.forEach((dot) => dot.classList.add("bg-gray-300"));

  slides[index].classList.add("active");
  dots[index].classList.remove("bg-gray-300");
  dots[index].classList.add("bg-main");
  currentSlideIndex = index;
}

// Auto slide
setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  changeSlide(currentSlideIndex);
}, 5000);

// Modal
const modal = document.getElementById("modal");

function openModal(title, desc, items) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;

  const list = document.getElementById("modalList");
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-3 text-gray";
    li.innerHTML = `<i class="bi bi-check-circle-fill text-main mt-1 flex-shrink-0"></i> <span>${item}</span>`;
    list.appendChild(li);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Form Submit
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  e.target.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Função do FAQ
function toggleFaq(element) {
  // Fecha todos os outros itens
  const allItems = document.querySelectorAll(".faq-item");
  allItems.forEach((item) => {
    if (item !== element && item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });

  // Toggle no item clicado
  element.classList.toggle("active");
}

// Abre o primeiro item por padrão
document.addEventListener("DOMContentLoaded", function () {
  const firstItem = document.querySelector(".faq-item");
  if (firstItem) {
    firstItem.classList.add("active");
  }
});
