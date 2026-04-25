function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = 'active';

    if (tabMenu.length && tabContent.length) { 
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent[index].classList.add(activeClass);

            tabContent.forEach(section => {
                if (section != tabContent[index])
                    section.classList.remove(activeClass);
            })
            tabContent[index].classList.add(tabContent[index].dataset.anime);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'active';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    if (linksInternos.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            /* window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            }); */

        }

        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection);
        })
    }

}
initScrollSuave();

function initAnimaScroll() {
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
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
initAnimaScroll();

