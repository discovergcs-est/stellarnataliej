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

  // Ensure video shows first frame and is controllable
  video.controls = true;
  video.muted = false;
  video.loop = false;
  video.currentTime = 0;

  // Click card to play/pause
  card.addEventListener('click', () => {
    // Pause all other videos
    videoCards.forEach(c => {
      const v = c.querySelector('video');
      if (v !== video) v.pause();
    });

    // Toggle play/pause for clicked video
    if (video.paused) video.play();
    else video.pause();
  });
});
