document.addEventListener('DOMContentLoaded', function () {
    // Responsive Navbar Toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });

        // Improved Accessibility: Add keyboard support for the navbar toggle
        navbarToggle.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                navbarMenu.classList.toggle('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ScrollMagic animations
    const controller = new ScrollMagic.Controller();

    // Home section
    const homeScene = new ScrollMagic.Scene({
        triggerElement: '#home',
        triggerHook: 2.0,
    })
        .setClassToggle('#home', 'fade-in')
        .addTo(controller);

    // Education section
    const educationScene = new ScrollMagic.Scene({
        triggerElement: '#education',
        triggerHook: 3.0,
    })
        .setClassToggle('#education', 'fade-in')
        .addTo(controller);

    // Experience section
    const experienceScene = new ScrollMagic.Scene({
        triggerElement: '#experience',
        triggerHook: 4.0,
    })
        .setClassToggle('#experience', 'fade-in')
        .addTo(controller);

    // Projects section
    const projectsScene = new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: 5.0,
    })
        .setClassToggle('#projects', 'fade-in')
        .addTo(controller);

    // Skills section
    const skillsScene = new ScrollMagic.Scene({
        triggerElement: '#skills',
        triggerHook: 6.0,
    })
        .setClassToggle('#skills', 'fade-in')
        .addTo(controller);

    // Contact section
    const contactScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        triggerHook: 7.0,
    })
        .setClassToggle('#contact', 'fade-in')
        .addTo(controller);

    // Scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.color = 'rgba(0, 0, 0, 0.8)';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.addEventListener('click', smoothScrollToTop);
    document.body.appendChild(scrollToTopButton);

    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 500) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});