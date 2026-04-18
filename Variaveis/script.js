'use strict'

var nome = 'Lucas';
var idade = 21;
var comidaFavorita;

comidaFavorita = 'Bife Wagyu';

var var1,
    var2,
    var3,
    var4,
    var5;

console.log(nome + ' tem ' + idade + ' anos.')
console.log(typeof typeof 23);

var string = 'Isso eh uma string';
var texto = 'Eu vou peidar em ' + 69 + ' segundos.\n\n';
var idade = 21;
var nome = 'Lucas',
    sobrenome = 'Henrique',
    comp = nome + ' ' + sobrenome;

var tempo = 'It\'s time'
console.log(texto);
console.log(comp);
console.log(typeof comp);

console.log(7/2);
console.log(typeof ('100' + 50));
console.log(10 + 5 * 2 / 2 + 20);
var num = '200';
console.log(+num + 50);

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = +numero / 2;
console.log(pesoPorDois);

var idadePar = 10;
if (idade > idadePar)
    console.log('Maior');
else if (idade === idadePar)
    console.log('Ingual');
else
    console.log('Menor'); 

if (('Gato' === 'gato') || (5 > 2)) {
    console.log('True');
} else {
    console.log('False');
}

var Top = 69;
console.log(somaTop(10, 30));

function somaTop(a, b) {
    var c = 100000;
    function outraSoma(){
        return a + b + c;
    }
    return outraSoma(a, b) + Top;
}

function ehTruty(valor) {
    return !!valor;
}

function ehPar(num) {
    return num % 2 == 0 ? true : false;
}

console.log(ehPar(1038129))
ehTruty("Sou legal")

function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
}

var menu = {
    width: 800,
    lenght: 600,
    backgroundColor: '#84E',
    centro() {
        return [this.width/2, this.lenght/2];
    },
}

console.log(menu.backgroundColor);
console.table(menu)

var pessoa = {
    nome: 'Lucas',
    sobrenome: 'Henrique',
    idade: 21,
    sexo: 'masculino'
}

pessoa.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa.sexo === 'masculino')
            return 'latir';
        else
            return 'nada';
    }
}

var nome = 'André';
nome.replace('ré', 'rei');

var btn = document.querySelectorAll('.pog');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        writeClipboardText(button.innerText)
        console.log("BOTAO");
        button.innerText += 'e';
    })
});

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

var videoJogos = ['Silkasonga', 'Mincecraft', 'Link'];
videoJogos.forEach((item) => {
    console.log(item);
});

var copas = [1959, 1962, 1970, 1994, 2002];
copas.forEach((ano) => {
    console.log(`O Brasil ganhou uma copa em ${ano}.`);
});

var fruta;
var frutas = ['Pitaya', 'Banana', 'Melancia', 'Uva', 'Pera', 'Maça'];
for(var i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'Pera')
        break;
    else
        fruta = frutas[i] + 'Tube';
};
console.log(fruta);

const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
}
data.dia = 29;