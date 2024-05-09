// JavaScript for animating sections on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('fade-in', 'active');
        } else {
            section.classList.remove('active');
        }
    });
});
