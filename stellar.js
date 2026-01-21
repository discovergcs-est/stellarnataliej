const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

const videos = document.querySelectorAll('video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
      }
    });
  });
});

// Select all video cards
const videoCards = document.querySelectorAll('.video-card');
const mainVideo = document.getElementById('mainVideo');
const mainVideoTitle = document.getElementById('mainVideoTitle');

// Load preview videos
videoCards.forEach(card => {
  const videoEl = card.querySelector('video');
  const src = card.dataset.src;
  videoEl.src = src;

  // Play preview on hover
  card.addEventListener('mouseenter', () => {
    videoEl.play();
  });

  card.addEventListener('mouseleave', () => {
    videoEl.pause();
    videoEl.currentTime = 0;
  });

  // Click to play in main player
  card.addEventListener('click', () => {
    mainVideo.src = src;
    mainVideoTitle.textContent = card.dataset.title;
    mainVideo.poster = videoEl.getAttribute('poster');
    mainVideo.play();
    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
