function Carro(marca, precoIni = 0) {
    const taxa = 1.2;
    const precoFin = precoIni * taxa;
    this.marca = marca;
    this.preco = precoFin;
}

const honda = new Carro('Honda', 2000);

/* const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
} */

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((elmnt) => {
            elmnt.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((elmnt) => {
            elmnt.classList.remove(classe);
        });
    }
}

const Lucas = new Pessoa('Lucas', 'Henrique', 20);

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxas = 0;
let valorRecebe = 0;
transacoes.forEach((trans) => {
    if (trans.descricao.startsWith('Taxa'))
        valorTaxas += Number(trans.valor.slice(3));
    else if (trans.descricao.startsWith('Recebimento'))
        valorRecebe += Number(trans.valor.slice(3));
});

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html1 = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlNovo = html1.replace(/[span]+/g, 'a');

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const taxas = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTax = 0;
taxas.forEach((tax) => {
    if (tax.trim().toLowerCase().startsWith('taxa'))
        totalTax++;
});

const preco = 42.69;
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

const numerosStr = '4, 5, 20, 8, 9';
console.log(numerosStr.split(', '));
console.log(Math.max(...numerosStr.split(', ')));

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$ 200'];
let soma = 0;
listaPrecos.forEach((valor) => {
    const preco = Math.round(Number.parseFloat(valor.trim().slice(3).replace(',', '.')));
    soma += preco;
})
console.log(soma);

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
const comPri = comidas.shift();
const comUlt = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort();
estudantes.reverse();
// console.log(estudantes.includes('Joana'));
// console.log(estudantes.includes('Juliana'));

let html2 = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
              </section>`;
const html2Novo = html2.split('section').join('ul').split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const strCarros = carros.join(' ');
carros.pop();

const aulas = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'HTML 3',
        min: 20,
    },
    {
        nome: 'HTML 4',
        min: 25,
    },
]
const puxarNomes = aula => aula.nome
const nomesAulas = aulas.map(puxarNomes);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = Array.from(document.querySelectorAll('.curso'));
const arrayCursos = cursos.map((curso) => {
    return {
        titulo: curso.querySelector('h1').innerText, 
        descricao: curso.querySelector('p').innerText,
        aulas: curso.querySelector('.aulas').innerText,
        horas: curso.querySelector('.horas').innerText,
    };
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(n => n > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some(nome => nome === 'Baixo'));

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
const totCompras = compras.reduce((soma, item) => {
    const preco = Number(item.preco.slice(3).replace(',', '.'));
    return soma + preco; 
}, 0);
console.log(totCompras);

function descPessoa(a, b, c) {
    console.log(this.nome + c + ` ${a} + ${b}`)
}
descPessoa.call(4, 5, '');
descPessoa.call(Lucas, 4, 5, '');