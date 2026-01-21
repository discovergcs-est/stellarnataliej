// ===== NAV SHADOW ON SCROLL =====
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ===== VIDEO FUNCTIONALITY =====
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

const tabButtons = document.querySelectorAll('.tab-button');
const videoContents = document.querySelectorAll('.video-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.video;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    videoContents.forEach(section => {
      const video = section.querySelector('video');

      if (section.id === target) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  });
});
