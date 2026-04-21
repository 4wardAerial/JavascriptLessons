function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    if (tabMenu.length && tabContent.length) { 
        tabContent[0].classList.add('active');

        function activeTab(index) {
            tabContent[index].classList.add('active');
            tabContent.forEach(content => {
                if (content != tabContent[index])
                    content.classList.remove('active');
            })
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
initTabNav();