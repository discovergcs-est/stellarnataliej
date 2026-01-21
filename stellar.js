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
const videos = document.querySelectorAll('.video-card video');
const videoCards = document.querySelectorAll('.video-card');
const mainVideo = document.getElementById('mainVideo');
const mainVideoTitle = document.getElementById('mainVideoTitle');

// Hover preview (muted)
videoCards.forEach(card => {
  const previewVideo = card.querySelector('video');
  const src = card.dataset.src;
  const poster = card.dataset.poster;

  previewVideo.src = src; // Ensure preview video has src
  previewVideo.poster = poster;

  // Hover: play muted preview
  card.addEventListener('mouseenter', () => {
    previewVideo.muted = true;
    previewVideo.play();
  });

  card.addEventListener('mouseleave', () => {
    previewVideo.pause();
    previewVideo.currentTime = 0;
  });

  // Click: play full video with sound
  card.addEventListener('click', () => {
    mainVideo.src = src;
    mainVideo.poster = poster;
    mainVideo.muted = false;
    mainVideo.play();
    mainVideoTitle.textContent = card.dataset.title;
    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Pause all preview videos
    videos.forEach(v => {
      v.pause();
      v.currentTime = 0;
    });
  });
});

// Optional: Pause main video if another card is clicked
mainVideo.addEventListener('play', () => {
  videos.forEach(v => {
    v.pause();
  });
});


