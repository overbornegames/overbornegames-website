// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar effect on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.style.padding = '15px 5%';
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.padding = '20px 5%';
        nav.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// Block scrolling immediately
document.body.classList.add("loading");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Delay before hiding loader (in ms)
    const DELAY = 300; // 0.5 seconds

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

progressBars.forEach(bar => observer.observe(bar));