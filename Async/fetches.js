export function initCep() {
    const inputCep = document.getElementById('inCep');
    const btnCep = document.getElementById('btnCep');
    
    function buscaCEP(cep) {
        const CEP = `https://viacep.com.br/ws/${cep}/json/`;
        const cepData = fetch(CEP);
        const resCep = document.querySelector('.resultadoCep');
    
        cepData.then(response => {
            return response.text();
        }).then(cepObj => {
            resCep.innerText = cepObj;
        });
    }

    if (btnCep) {
        btnCep.addEventListener('click', event => {
            event.preventDefault();
            const cep = inputCep.value
            buscaCEP(cep);
        });
    }
}

export function initBtc() {
    const btcDisplay = document.querySelector('.btc');

    function fetchBitcoin() {
        fetch("https://blockchain.info/ticker")
            .then(response => response.json())
            .then(bitJson => {
                btcDisplay.innerText = ('R$ ' + bitJson.BRL.buy).replace('.', ',');
            }).catch(error => {
                btcDisplay.innerText = 'Erro pegando os valores';
            });
    }

    if (btcDisplay) {
        clearInterval(btcTimer);
        btcTimer = setInterval(fetchBitcoin, 10000);
    } else {
        clearInterval(btcTimer);
    }
}

export function initPiada() {
    const piada = document.querySelector('.piada');
    const proxPiada = document.querySelector('.proxPiada');

    async function fetchStuff() {
        const randPokemon = Math.round(Math.random() * 1330);
        const randInterval = Math.round(Math.random() * 19);
    
        try {
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
        catch(error) {
            console.log(error);
        }
    }

    if (proxPiada) {
        proxPiada.addEventListener('click', fetchStuff);
        fetchStuff();
    }
}

let btcTimer;