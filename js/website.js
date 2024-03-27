document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    }

    // Form validation for the contact form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const errorElement = document.getElementById('formError');

        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            errorElement.textContent = 'Please fill in all fields.';
            return;
        }

        // You can add more sophisticated validation if needed

        // If all is good, you might want to submit the form or take further action
        alert('Form submitted successfully!');
    }
});
