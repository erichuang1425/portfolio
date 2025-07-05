document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-on-scroll, .slide-up-on-scroll');

    const observer = new IntersectionObserver(function(entries, obs) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-on-scroll')) {
                    entry.target.classList.add('fade-in');
                }
                if (entry.target.classList.contains('slide-up-on-scroll')) {
                    entry.target.classList.add('slide-up');
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});
