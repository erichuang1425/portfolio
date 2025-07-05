document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    const wrappers = document.querySelectorAll('.pan-wrapper');
    wrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let imgX = 0;
        let imgY = 0;

        wrapper.addEventListener('mousedown', e => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            wrapper.classList.add('dragging');
        });

        document.addEventListener('mousemove', e => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            img.style.transform = `translate(${imgX + dx}px, ${imgY + dy}px)`;
        });

        const endDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            const match = /translate\((-?\d+(?:\.\d+)?)px,\s*(-?\d+(?:\.\d+)?)px\)/.exec(img.style.transform);
            if (match) {
                imgX = parseFloat(match[1]);
                imgY = parseFloat(match[2]);
            }
            wrapper.classList.remove('dragging');
        };

        document.addEventListener('mouseup', endDrag);
        wrapper.addEventListener('mouseleave', endDrag);
        wrapper.addEventListener('dragstart', e => e.preventDefault());
    });
});
