document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });
});
