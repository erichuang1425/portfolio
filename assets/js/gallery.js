function renderGallery(items) {
  const container = document.getElementById('gallery-container');
  if (!container || !Array.isArray(items)) return;
  items.forEach(item => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title || '';
    figure.appendChild(img);

    if (item.title || item.year || item.medium || item.dimensions) {
      const caption = document.createElement('figcaption');
      const parts = [];
      if (item.title) parts.push(item.title);
      if (item.year) parts.push(item.year);
      if (item.medium || item.dimensions) {
        const details = [item.medium, item.dimensions].filter(Boolean).join(', ');
        if (details) parts.push(details);
      }
      caption.innerHTML = parts.join(' – ');
      figure.appendChild(caption);
    }

    container.appendChild(figure);
  });
}

async function loadGallery(folder) {
  try {
    const res = await fetch(`../images/${folder}/manifest.json`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    renderGallery(data);
  } catch (err) {
    console.error('Could not load gallery', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gallery-container');
  const folder = container && container.dataset.folder;
  if (folder) {
    loadGallery(folder);
  } else if (typeof artworks !== 'undefined') {
    renderGallery(artworks);
  }
});
