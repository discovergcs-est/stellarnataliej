// NAV SHADOW ON SCROLL 
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// VIDEO FUNCTIONALITY 
const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    const video = card.querySelector('video');
    video.controls = true;  // show YouTube-like controls
    video.muted = false;    // allow sound
    video.loop = false;
    video.currentTime = 0;  // show first frame

    card.addEventListener('click', () => {
      // Pause all other videos
      videoCards.forEach(c => {
        const v = c.querySelector('video');
        if (v !== video) v.pause();
      });

      // Toggle play/pause on this video
      if (video.paused) video.play();
      else video.pause();
    });
  });

 // Scroll to Top Button
    const upBtn = document.querySelector('.up');

    function toggleUpBtn() {
      if (window.scrollY > 200) {
        upBtn.classList.add('show-up-btn');
      } else {
        upBtn.classList.remove('show-up-btn');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    window.addEventListener('scroll', toggleUpBtn);
    upBtn.addEventListener('click', scrollToTop);

//NAV BAR
 
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200; // offset for fixed nav
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);
