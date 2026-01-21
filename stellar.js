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
  video.muted = false;
  video.controls = true;
  video.loop = false;
  video.currentTime = 0;
  video.pause();

  card.addEventListener('click', () => {
    videoCards.forEach(c => {
      const v = c.querySelector('video');
      if (v !== video) v.pause();
    });

    if (video.paused) video.play();
    else video.pause();
  });
});
