
/* =========================================
   STELLAR — NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
    } else {
      navbar.classList.remove("scrolled");
      navbar.style.boxShadow = "none";
    }
  });
}


/* =========================================
   STELLAR — MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navbar = document.querySelector(".navbar");

if (menuToggle && mainNav && navbar) {

  function closeMenu() {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("active");
    navbar.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = !mainNav.classList.contains("active");

    menuToggle.classList.toggle("active", isOpen);
    mainNav.classList.toggle("active", isOpen);
    navbar.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close when a navigation link is clicked
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });

  // Close when returning to desktop view
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}


/* =========================================
   LOAD MORE PHOTOS
========================================= */

const loadMoreButton = document.querySelector("#loadMore");
const extraPhotos = document.querySelectorAll(".extra-photo");

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    extraPhotos.forEach(photo => {
      photo.style.display = "block";
    });

    loadMoreButton.style.display = "none";
  });
}

/* =========================================
   CURRENT YEAR
========================================= */

const year = document.querySelector(".current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const upBtn = document.querySelector(".up");

if (upBtn) {

  function toggleUpBtn() {
    if (window.scrollY > 200) {
      upBtn.classList.add("show-up-btn");
    } else {
      upBtn.classList.remove("show-up-btn");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener("scroll", toggleUpBtn);
  upBtn.addEventListener("click", scrollToTop);

  toggleUpBtn();
}

/* =========================================
   ACTIVE NAVIGATION LINK ON SCROLL
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function setActive(id) {
  navLinks.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${id}`) {
      link.classList.add("active");
    }
  });
}

function activateNavLink() {

  if (!sections.length) return;

  const scrollY = window.scrollY;
  const pageBottom = scrollY + window.innerHeight;

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 200;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      setActive(sectionId);
    }
  });

  // Highlight Contact at the bottom of the page
  if (pageBottom >= document.documentElement.scrollHeight - 5) {
    setActive("contact");
  }
}

window.addEventListener("scroll", activateNavLink);
window.addEventListener("load", activateNavLink);

/* =========================================
   VIDEO FUNCTIONALITY
========================================= */

const videos = document.querySelectorAll(".video-card video");

videos.forEach(video => {

  // Allow mobile and desktop playback
  video.controls = true;
  video.playsInline = true;
  video.autoplay = false;
  video.loop = false;
  video.preload = "metadata";

  video.removeAttribute("autoplay");

  // Pause other videos when one starts playing
  video.addEventListener("play", () => {
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// Pause videos when leaving the page
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    videos.forEach(video => video.pause());
  }
});
