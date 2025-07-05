document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });

        mobileMenu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.remove('open');
            }
        });
    }
});
