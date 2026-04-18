const animaisSection = document.getElementById('animais');
const uls = document.getElementsByClassName('ul');

const primeiraLi = document.querySelector('li');

const linksInternos = document.querySelectorAll('[href^="#"');
console.log(linksInternos);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionHTML);
console.log(gridSectionNode);

const todasImgsMap = document.querySelectorAll('img[src^="img/mapa"]');
console.log(todasImgsMap);

const primH2 = document.querySelector('.animais-descricao h2');
console.log(primH2);

const ps = document.querySelectorAll('p');
const ultimop = ps[ps.length - 1];
console.log(ultimop);

const imgs = document.querySelectorAll('img');

const paras = document.querySelectorAll('p');
paras.forEach(item => console.log(item.innerText));

const menu = document.querySelector('.menu');
console.log(menu.className);
menu.classList.add('ativo', 'teste');
menu.classList.toggle('azul');

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach(item => item.classList.toggle('ativo'));

itensMenu.forEach((item, index) => {
    if (index != 0)
        item.classList.remove('ativo');
});

imgs.forEach((item) => {
    if (item.attributes.getNamedItem('alt')) 
        console.log(`${item.src} has attribute alt.`)
    else
        console.log(`${item.src} doesn't have attribute alt.`)
})

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.youtube.com/');

const links = document.querySelectorAll('.menu a');
const linkObj = links[links.length - 1];
linkObj.innerText = "YouTube";

console.log(
    window.innerWidth,
    window.outerWidth,
    window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)');
if (small.matches)
    console.log('Tela Menor');
else
    console.log('Tela Maior');

const img1 = document.querySelector('img');
console.log(img1.offsetTop);

let soma = 0;
imgs.forEach((item) => soma += item.offsetWidth);
console.log(soma);

const mobile = window.matchMedia('(max-width: 720px)').matches;
if (mobile)
    menu.classList.add('mobile');
else
    menu.classList.remove('mobile');

img1.addEventListener('click', callback);

function callback(event) {
    console.log(event);
}

const primh2 = document.querySelector('h2');
window.addEventListener('scroll', checkImage);
function checkImage(event) {
    let h2rect = primh2.getBoundingClientRect();
    if (h2rect.top < 0)
        console.log('Passou do elemento');
}

window.addEventListener('keydown', handleKeyboard);
function handleKeyboard(event) {
    if (event.key === 'Escape')
        console.log('ESCAPE');
    else if (event.key === 'a') {
        document.body.classList.toggle('azul');
        titulo.appendChild(novoh1);
    }
    else if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
        novoh2.remove();
    }
}

linksInternos.forEach(link => link.addEventListener('click', handleLinks));
function handleLinks(event) {
    event.preventDefault();
    event.currentTarget.classList.add('ativo');

    linksInternos.forEach(link => {
        if (link != event.currentTarget)
            link.classList.remove('ativo');
    })
}

const tudo = document.querySelectorAll('body *');
tudo.forEach(elmnt => 
    elmnt.addEventListener('click', (event) => {
        console.log(event.currentTarget);
    })
);

const lista = document.querySelector('.animais-lista');
console.log(
    lista.parentElement,
    lista.parentElement.parentElement,
    lista.children
);

const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');
const novoh1 = document.createElement('batatao');
novoh1.innerText = '...e onde habitam...?';
novoh1.classList.add('titulo');

const novoh2 = document.createElement('batatao');
novoh2.innerText = ' e uh o q era mesmo'
novoh2.classList.add('azul');

titulo.appendChild(novoh2);

const menuClone = menu.cloneNode(true);
const copy = document.querySelector('.copy'); 
copy.appendChild(menuClone);

const faq = document.querySelector('.faq');

const dtfaq = faq.querySelector('dt');
const ddfaq = dtfaq.nextElementSibling;

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
