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
const mainVideo = document.getElementById('mainVideo');
const mainVideoTitle = document.getElementById('mainVideoTitle');

// Function to pause all videos except the one playing
function pauseOtherVideos(current) {
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(v => {
    if (v !== current) {
      v.pause();
    }
  });
}

// Initialize video cards
videoCards.forEach(card => {
  const videoEl = card.querySelector('video');
  const src = card.dataset.src;

  // Set video source
  videoEl.src = src;

  // Hover preview
  card.addEventListener('mouseenter', () => {
    pauseOtherVideos(videoEl); // Stop other previews
    videoEl.play();
  });

  card.addEventListener('mouseleave', () => {
    videoEl.pause();
    videoEl.currentTime = 0; // Reset preview
  });

  // Click to play in main player
  card.addEventListener('click', () => {
    mainVideo.src = src;
    mainVideo.poster = videoEl.getAttribute('poster');
    mainVideoTitle.textContent = card.dataset.title;
    mainVideo.play();
    pauseOtherVideos(mainVideo); // Stop all other videos
    mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Ensure only one video plays at a time globally
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    pauseOtherVideos(video);
  });
});
