export default function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const partWindow = window.innerHeight * 0.75;
    const activeClass = 'active';

    if (sections.length) {
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - partWindow) < 0;
                if (isSectionVisible) {
                    section.classList.add(activeClass);
                }
            });
        }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
    }
}