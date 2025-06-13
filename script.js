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
// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector("header");
//     // Add/remove classes based on scroll position
//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//         navbar.classList.remove("transparent");
//     } else {
//         navbar.classList.add("transparent");
//         navbar.classList.remove("scrolled");
//     }
// });
// Header Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');})

// Mobile Menu Icon Click Handler
menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// Video Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const lightbox = document.getElementById('videoLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.querySelector('.lightbox-close');
    
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        const playBtn = card.querySelector('.play-button');
        
        // Click on play button
        playBtn.addEventListener('click', function() {
            const videoSrc = video.querySelector('source').src;
            lightboxVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
            lightbox.style.display = 'flex';
            lightboxVideo.play();
        });
        
        // Click on video card
        card.addEventListener('click', function(e) {
            if (!playBtn.contains(e.target) && !video.contains(e.target)) {
                const videoSrc = video.querySelector('source').src;
                lightboxVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
                lightbox.style.display = 'flex';
                lightboxVideo.play();
            }
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.currentTime = 0;
    });
    
    // Close when clicking outside video
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxVideo.pause();
            lightboxVideo.currentTime = 0;
        }
    });
});

