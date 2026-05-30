document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');

    contactForm.addEventListener('submit', (event) => {
        // Prevent the browser from actually trying to submit/reload the page
        event.preventDefault();

        // Display the success feedback alert
        successAlert.style.display = 'block';

        // Clear all the text boxes and fields in the form
        contactForm.reset();

        // Scroll to the top of the container smoothly so the user sees the confirmation notice
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Optional: Hide the success message automatically after 5 seconds
        setTimeout(() => {
            successAlert.style.display = 'none';
        }, 5000);
    });
});