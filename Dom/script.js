console.log(window);
console.log(window.location.hostname)

const h1 = document.querySelector('h1');

onfocus = () => {
    console.log("FOCUSED LMAO");
    h1.innerText = 'hihihihihi';
}

onblur = () => {
    console.log("UNFOCUSED BWL");
    h1.innerText = 'BOO!!!';
}

function callback() {
    console.log('Tascou a mão em ', h1.innerText);
    alert('RISCO DE CHUVAS');
}
h1.addEventListener('click', callback);

const elementoAtivo = document.querySelector('.ativo')
console.log(window.location.href);
console.log(window.navigator.language);
console.log(window.length);
