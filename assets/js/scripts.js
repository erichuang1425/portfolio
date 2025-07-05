document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });


    // ----- Infinite Scroll Gallery -----
    const gallery = document.getElementById('infinite-gallery');
    const sentinel = document.getElementById('gallery-sentinel');

    if (gallery && sentinel) {
        const images = [
            'https://via.placeholder.com/400x300?text=Project+1',
            'https://via.placeholder.com/400x300?text=Project+2',
            'https://via.placeholder.com/400x300?text=Project+3',
            'https://via.placeholder.com/400x300?text=Project+4',
            'https://via.placeholder.com/400x300?text=Project+5',
            'https://via.placeholder.com/400x300?text=Project+6'
        ];

        let index = 0;

        function loadImages() {
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 3 && index < images.length; i++, index++) {
                const img = document.createElement('img');
                img.src = images[index];
                img.alt = `Gallery image ${index + 1}`;
                img.loading = 'lazy';
                fragment.appendChild(img);
            }
            gallery.appendChild(fragment);

            if (index >= images.length) {
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadImages();
            }
        });

        loadImages();
        observer.observe(sentinel);
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    function setActiveLink() {
        let currentSection = sections[0];
        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - header.offsetHeight) {
                currentSection = section;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection.id}`);
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

});
