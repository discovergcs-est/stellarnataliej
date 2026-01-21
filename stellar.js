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
  
  // Play muted preview on load (optional)
  video.muted = true;
  video.loop = true;
  video.play().catch(() => {}); // autoplay may be blocked on mobile

  // Click to play with sound
  card.addEventListener('click', () => {
    // Pause all other videos
    videoCards.forEach(c => {
      const v = c.querySelector('video');
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
        v.muted = true; // back to muted preview
      }
    });

    // Play this video with sound
    video.muted = false;
    video.play();
  });
});

