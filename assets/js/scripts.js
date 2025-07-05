document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = lightbox.querySelector('img');
    const portfolioImages = document.querySelectorAll('#portfolio img');

    portfolioImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('show');
        lightboxImg.src = '';
    };

    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    const hero = document.querySelector('.hero');

    const navToggle = document.querySelector('.nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });
    }


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
    window.addEventListener('scroll', () => {
        if (hero) {
            const offset = window.pageYOffset;
            hero.style.backgroundPositionY = `${offset * 0.5}px`;
        }
    });
    setActiveLink();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(section => {
        observer.observe(section);
    });
});
