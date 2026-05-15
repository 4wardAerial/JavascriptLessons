function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return this;
    }

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    return Object.freeze({
        elements,
        on,
        hide,
        show,
        addClass,
        removeClass,
    });
}

const buttons = $$('button');
buttons.addClass('ativo');

function createButton(background = 'blue', color = 'red') {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
}

const frutas = ['banana', 'uva', 'morango'];
const comidas = ['pizza', 'batata'];
comidas.push(...frutas);

const lis = document.querySelectorAll('li');
for (const l of lis) {
    l.classList.add('dor');
}

for (const prop in window) {
    console.log(`${prop} = ${window[prop]}`);
}