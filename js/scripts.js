document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header functionality handled via CSS class toggling on scroll
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('back-to-top');

    // Toggle 'scrolled' class for header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show or hide Back to Top button
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Back to Top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header functionality handled via CSS class toggling on scroll
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('back-to-top');

    // Toggle 'scrolled' class for header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show or hide Back to Top button
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Back to Top button functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
