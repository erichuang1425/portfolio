document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    // Lightbox functionality
    const galleryImages = document.querySelectorAll('.heritage-gallery img');
    if (galleryImages.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        const lightboxImg = document.createElement('img');
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        const srcList = Array.from(galleryImages).map(img => img.src);
        let currentIndex = 0;

        const keyHandler = function (e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % srcList.length;
                lightboxImg.src = srcList[currentIndex];
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + srcList.length) % srcList.length;
                lightboxImg.src = srcList[currentIndex];
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        };

        const closeLightbox = function () {
            lightbox.classList.remove('active');
            document.removeEventListener('keydown', keyHandler);
        };

        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                lightboxImg.src = srcList[currentIndex];
                lightbox.classList.add('active');
                document.addEventListener('keydown', keyHandler);
            });
        });

        lightbox.addEventListener('click', closeLightbox);
    }
});
