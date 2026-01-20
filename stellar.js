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
