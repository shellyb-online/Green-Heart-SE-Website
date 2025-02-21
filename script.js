// Mobile Menu Variables
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Mobile Menu Toggle Function
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Close Mobile Menu on Scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Header Scroll Effect
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("header");
    // Add/remove classes based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Icon Click Handler
menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// DOM Content Loaded Event Handler
document.addEventListener("DOMContentLoaded", () => {
    // Lightbox Elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Add Click Events to Gallery Images
    document.querySelectorAll(".image-container img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // Close Lightbox Event
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
