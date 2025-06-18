const images = document.querySelectorAll('.gallery-img'); // All your gallery images
  const lightbox = document.getElementById('lightbox');
  const lightImg = document.getElementById('lightbox-img');

  let current = 0;

  // Open Lightbox//
  images.forEach((img, i) => {
    img.addEventListener('click', () => {
      current = i;
      lightImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Close Lightbox//
  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  // Navigate Next/Prev//
  function navigateLightbox(dir) {
    current = (current + dir + images.length) % images.length;
    lightImg.src = images[current].src;
  }

