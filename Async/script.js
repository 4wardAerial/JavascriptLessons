const inputCep = document.getElementById('inCep');
const btnCep = document.getElementById('btnCep');
const resCep = document.querySelector('.resultadoCep');
btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value
    buscaCEP(cep);
}

function buscaCEP(cep) {
    const CEP = `https://viacep.com.br/ws/${cep}/json/`;
    const cepData = fetch(CEP);

    cepData.then(response => {
        return response.text();
    }).then(cepObj => {
        resCep.innerText = cepObj;
    });
}

const btcDisplay = document.querySelector('.btc');
function fetchBitcoin() {
    fetch("https://blockchain.info/ticker")
        .then(response => response.json())
        .then(bitJson => {
            console.log(bitJson.BRL.buy);
            btcDisplay.innerText = ('R$ ' + bitJson.BRL.buy).replace('.', ',');
        });
}

const piada = document.querySelector('.piada');
const proxPiada = document.querySelector('.proxPiada');
proxPiada.addEventListener('click', fetchStuff);

async function fetchStuff() {
    const randPokemon = Math.round(Math.random() * 1330);
    const randInterval = Math.round(Math.random() * 19);

    const dadosPiada = fetch("https://api.chucknorris.io/jokes/random");
    const dadosPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${randPokemon}&limit=20`);
    
    const jsonPiada = await (await dadosPiada).json();
    const jsonPokemon = await (await dadosPokemon).json();

    
    const namePokemon = capitalizeFirstLetter(jsonPokemon.results[randInterval].name.replaceAll('-', ' '));
    const piadaPokemon = jsonPiada.value.replaceAll("Chuck Norris", namePokemon);
    piada.innerText = `"${piadaPokemon}"`;
    
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
}
fetchStuff();