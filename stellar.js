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
// Select all video cards
const videoCards = document.querySelectorAll('.video-card');
const mainVideo = document.getElementById('mainVideo');
const mainVideoTitle = document.getElementById('mainVideoTitle');

videoCards.forEach(card => {
  const videoEl = card.querySelector('video');
  const src = card.dataset.src;

  // Set the actual video source
  videoEl.src = src;
  videoEl.loop = true;      // loop for hover preview
  videoEl.muted = true;     // mute preview
  videoEl.controls = false; // hide controls on preview
  videoEl.preload = "metadata";

  // Hover: play preview silently
  card.addEventListener('mouseenter', () => {
    videoEl.play();
  });

  card.addEventListener('mouseleave', () => {
    videoEl.pause();
    videoEl.currentTime = 0;
  });

  // Click: play full video with sound
  card.addEventListener('click', () => {
    // Pause other videos
    document.querySelectorAll('video').forEach(v => v.pause());

    // Update main video
    mainVideo.src = src;
    mainVideo.poster = videoEl.getAttribute('poster');
    mainVideo.muted = false;
    mainVideo.controls = true;
    mainVideo.play();

    // Update title
    mainVideoTitle.textContent = card.dataset.title;

    // Scroll main video into view
    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

