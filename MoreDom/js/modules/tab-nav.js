export default function initTabNav() {
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