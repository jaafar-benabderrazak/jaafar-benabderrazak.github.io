// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.querySelector('.back-to-top');

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    // Show back-to-top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to top on back-to-top button click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize particle background (optional)
    // You can use a library like particles.js or tsParticles for advanced effects
    /*
    tsParticles.load("hero-canvas", {
        particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
        },
        background: {
            color: "#3498db"
        }
    });
    */
});
