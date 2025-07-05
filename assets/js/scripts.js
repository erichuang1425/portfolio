document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    // Simple lightbox implementation
    const galleryImages = document.querySelectorAll('.heritage-gallery img');
    if (galleryImages.length) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        let currentIndex = 0;

        const showImage = (index) => {
            currentIndex = index;
            lightbox.innerHTML = `<img src="${galleryImages[index].src}" alt="">`;
            lightbox.style.display = 'flex';
        };

        galleryImages.forEach((img, i) => {
            img.addEventListener('click', () => showImage(i));
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Swipe navigation
        let startX = 0;
        lightbox.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        });

        lightbox.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].screenX - startX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) {
                    currentIndex = (currentIndex + 1) % galleryImages.length;
                } else {
                    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                }
                showImage(currentIndex);
            }
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });
});
