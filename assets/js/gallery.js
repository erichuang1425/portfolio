function renderGallery(items) {
  const container = document.getElementById('gallery-container');
  if (!container || !Array.isArray(items)) return;
  items.forEach(item => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title || '';
    figure.appendChild(img);

    // Open a lightbox when the image is clicked
    img.addEventListener('click', () => openLightbox(item));

    container.appendChild(figure);
  });
}

let prevScroll = 0;

function openLightbox(item) {
  prevScroll = window.scrollY || window.pageYOffset;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';

  const content = document.createElement('div');
  content.className = 'lightbox-content';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';

  const imgEl = document.createElement('img');
  imgEl.src = item.src;
  imgEl.alt = item.title || '';

  content.appendChild(closeBtn);
  content.appendChild(imgEl);

  if (item.title || item.year || item.medium || item.dimensions) {
    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    const parts = [];
    if (item.title) parts.push(item.title);
    if (item.year) parts.push(item.year);
    const details = [item.medium, item.dimensions].filter(Boolean).join(', ');
    if (details) parts.push(details);
    caption.textContent = parts.join(' – ');
    content.appendChild(caption);
  }

  const zoomControls = document.createElement('div');
  zoomControls.className = 'lightbox-zoom-controls';
  zoomControls.innerHTML = '<button class="zoom-in">+</button><button class="zoom-out">-</button>';
  content.appendChild(zoomControls);

  overlay.appendChild(content);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  let scale = 1;
  const applyScale = () => {
    imgEl.style.transform = `scale(${scale})`;
  };

  zoomControls.querySelector('.zoom-in').addEventListener('click', e => {
    e.stopPropagation();
    scale += 0.1;
    applyScale();
  });
  zoomControls.querySelector('.zoom-out').addEventListener('click', e => {
    e.stopPropagation();
    scale = Math.max(1, scale - 0.1);
    applyScale();
  });

  function close() {
    overlay.remove();
    document.body.style.overflow = '';
    window.scrollTo(0, prevScroll);
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
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
