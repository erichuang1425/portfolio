document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Thank you for reaching out. I will get back to you soon!';
        form.reset();
    });

    const yearFilter = document.getElementById('year-filter');
    const categoryFilter = document.getElementById('category-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function filterGallery() {
        const year = yearFilter ? yearFilter.value : 'all';
        const category = categoryFilter ? categoryFilter.value : 'all';

        galleryItems.forEach(item => {
            const itemYear = item.getAttribute('data-year');
            const itemCategory = item.getAttribute('data-category');
            const matchYear = (year === 'all' || itemYear === year);
            const matchCategory = (category === 'all' || itemCategory === category);
            if (matchYear && matchCategory) {
                item.classList.remove('hidden');
                const img = item.querySelector('img');
                if (img && !img.getAttribute('src')) {
                    img.setAttribute('src', img.getAttribute('data-src'));
                }
            } else {
                item.classList.add('hidden');
            }
        });
    }

    if (yearFilter) yearFilter.addEventListener('change', filterGallery);
    if (categoryFilter) categoryFilter.addEventListener('change', filterGallery);

    filterGallery();
});
