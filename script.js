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


document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navbar.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Dropdown functionality for mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// Footer functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Update copyright year automatically
//     document.getElementById('current-year').textContent = new Date().getFullYear();
    
//     // Newsletter form submission
//     const newsletterForm = document.querySelector('.newsletter-form');
//     if (newsletterForm) {
//         newsletterForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             const email = this.querySelector('input').value;
//             // Here you would typically send the email to your server
//             alert('Thank you for subscribing!');
//             this.reset();
//         });
//     }
// })

// Blog/footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.sidebar-newsletter');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            // Here you would typically send the email to your server
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

