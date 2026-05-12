import {initCep, initBtc, initPiada} from './fetches.js';
import {initBtn} from './notification.js';

initCep();
initBtc();
initPiada();

initBtn();
initLoader();

function initLoader() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            fetchPage(event.target.href);
            window.history.pushState(null, null, event.target.href);
        });
    });

    async function fetchPage(url) {
        document.querySelector('.content').innerHTML = 'Carregando...'
        const pageResponse = await fetch(url);
        const pageText = await pageResponse.text();
        
        replaceContent(pageText);
    }

    function replaceContent(newText) {
        const newHTML = document.createElement('div');
        newHTML.innerHTML = newText;
        
        const oldContent = document.querySelector('.content');
        const newContent = newHTML.querySelector('.content');
        
        oldContent.innerHTML = newContent.innerHTML;
        document.title = newHTML.querySelector('title').innerText;
        initCep();
        initBtc();
        initPiada();

        initBtn();
    }

    window.addEventListener('popstate', () => {
        fetchPage(window.location.href);
    });
}
