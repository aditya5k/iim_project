// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add click event to all "Apply Now" buttons
    const applyButtons = document.querySelectorAll(".position a");

    applyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("You are about to be redirected to the application form.");
        });
    });

    // Smooth scroll for internal navigation links (optional enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
