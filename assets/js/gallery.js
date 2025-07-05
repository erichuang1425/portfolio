function renderGallery(images) {
  const container = document.getElementById('gallery-container');
  if (!container || !Array.isArray(images)) return;
  images.forEach(item => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    figure.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.innerHTML = `${item.title} – ${item.year}<br>${item.medium}, ${item.dimensions}`;
    figure.appendChild(caption);

    container.appendChild(figure);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof artworks !== 'undefined') {
    renderGallery(artworks);
  }
});
