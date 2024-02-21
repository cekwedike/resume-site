document.addEventListener('DOMContentLoaded', function () {
    // Responsive Navbar Toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });
    }

    // Improved Accessibility: Add keyboard support for the navbar toggle
    if (navbarToggle) {
        navbarToggle.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                navbarMenu.classList.toggle('active');
            }
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
});