// Update navbar style based on scroll position
function updateNavbarStyle() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    if (window.scrollY > 250) {
        nav.style.backdropFilter    = 'blur(8px)';
        nav.style.backgroundColor   = 'rgb(0, 0, 0)';
        nav.style.boxShadow         = '0 5px 20px rgba(0, 0, 0, 0.25)';
        nav.style.paddingBottom     = '8px';
        nav.style.paddingLeft       = '16px';
        nav.style.paddingRight      = '16px';
        nav.style.paddingTop        = '8px';
    } else {
        nav.style.backdropFilter    = 'blur(0px)';
        nav.style.backgroundColor   = 'rgb(0, 0, 0, 0)';
        nav.style.boxShadow         = 'none';
        nav.style.paddingBottom     = '32px';
        nav.style.paddingLeft       = '40px';
        nav.style.paddingRight      = '40px';
        nav.style.paddingTop        = '32px';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 54,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Navbar effect on scroll
window.addEventListener('scroll', updateNavbarStyle);

// Loader functionality
document.body.classList.add("loading");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Delay before hiding loader (in ms)
    const DELAY = 250; // 0.25 second

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        // Enable scrolling + remove blur
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");

        loader.addEventListener(
            "transitionend",
            () => loader.remove(),
            { once: true }
        );
    }, DELAY);
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar style
    updateNavbarStyle();
    
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Check if elements exist
    if (!hamburger || !navLinks) {
        console.log('Hamburger elements not found');
        return;
    }
    
    console.log('Hamburger menu initialized');
    
    // Toggle menu function
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle active class on nav links
        navLinks.classList.toggle('active');
        
        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Restore scrolling
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Restore scrolling
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Restore scrolling
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Restore scrolling
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    });
});