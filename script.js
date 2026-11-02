// =============================
// 1. MOBILE MENU
// =============================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");

  const isOpen = navbar.classList.contains("open");

  menuToggle.innerHTML = isOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';

  lucide.createIcons();
});

// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");

    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });
});

// =============================
// 2. ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// =============================
// 3. SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
  ".service-card, .article-card, .about-content, .about-image, .newsletter-wrapper, .contact-wrapper",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// =============================
// 4. BACK TO TOP BUTTON
// =============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =============================
// 5. NEWSLETTER FORM
// =============================

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    formMessage.textContent = "لطفاً ایمیل خود را وارد کن.";
    return;
  }

  formMessage.textContent = "تشکر! فرم شما با موفقیت ثبت شد.";

  newsletterForm.reset();
});

// =============================
// 6. CURRENT YEAR
// =============================

document.getElementById("year").textContent = new Date().getFullYear();

// =============================
// 7. INITIALIZE ICONS
// =============================

lucide.createIcons();