document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    document.querySelectorAll('.heritage-gallery img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        lightbox.classList.add('hidden');
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            lightbox.requestFullscreen().then(() => {
                fullscreenBtn.textContent = 'Exit Fullscreen';
            }).catch(() => {});
        } else {
            document.exitFullscreen().then(() => {
                fullscreenBtn.textContent = 'View Fullscreen';
            });
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });
});
