// Mobile Menu Toggle
const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Page Transition
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const target = this.getAttribute("href");

        if (target && target.endsWith(".html")) {
            e.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 400);
        }
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Show Success Message After Submission
// Contact form success handler
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
        const successBox = document.getElementById("success-message");
        if (successBox) {
            successBox.style.display = "block";
        }
    }
});