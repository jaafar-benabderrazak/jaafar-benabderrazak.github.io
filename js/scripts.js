// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the back-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll back to top smoothly when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Submission Feedback
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    formFeedback.textContent = 'Thank you for your message! I will get back to you soon.';
                    formFeedback.style.color = 'green';
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formFeedback.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formFeedback.textContent = 'Oops! There was a problem submitting your form.';
                        }
                        formFeedback.style.color = 'red';
                    })
                }
            })
            .catch(error => {
                formFeedback.textContent = 'Oops! There was a problem submitting your form.';
                formFeedback.style.color = 'red';
            });
        });
    }

    // Optional: Add scroll-based animations for new sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.project-card, .gallery-item, .contact-section, .contact-info, .contact-image');

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
