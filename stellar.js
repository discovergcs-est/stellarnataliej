
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

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const navbar = document.querySelector(".navbar");

if (menuToggle && mainNav && navbar) {

  // OPEN AND CLOSE MENU
  menuToggle.addEventListener("click", function () {

    const isOpen = navbar.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  });

  // CLOSE MENU WHEN A LINK IS CLICKED
  mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      navbar.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

  // CLOSE MENU WHEN CLICKING OUTSIDE
  document.addEventListener("click", function (event) {

    if (
      !navbar.contains(event.target)
    ) {

      navbar.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }

  });

  // CLOSE MENU WHEN SCREEN RESIZES TO DESKTOP
  window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

      navbar.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

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

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {

  const video = card.querySelector("video");

  if (!video) return;

  video.controls = true;
  video.muted = false;
  video.loop = false;
  video.currentTime = 0;

  card.addEventListener("click", event => {

    // Let native video controls work normally
    if (event.target.closest("video")) return;

    // Pause all other videos
    videoCards.forEach(otherCard => {
      const otherVideo = otherCard.querySelector("video");

      if (otherVideo && otherVideo !== video) {
        otherVideo.pause();
      }
    });

    // Toggle this video
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }

  });

});
