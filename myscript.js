// Generiamo 5 numeri casuali

let randomArray = [];

const min = 1;
const max = 100;


for(let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if(!randomArray.includes( randomNumber )) {
        randomArray.push( randomNumber );

    } else {
        i--;
    }
}

console.log(randomArray);

// Mostriamoli all'utente

alert(`Ricorda questi numeri ${randomArray}`);

// Facciamo partire il tempo

let t = 4;

const clock = setInterval(myFunction, 1000);

let timer = document.getElementById('timer');

timer.innerHTML = 5;

function myFunction() {
    timer.innerHTML = `${t}`;
    t--;
    if(t == -1) {
        clearInterval(clock);
        timer.innerHTML = "Tempo scaduto";
        setTimeout(myFunction2, 1000);
    }
}

// Chiediamo i numeri all'utente'

let arrayInseritiCorretti = [];

let numero;

let punteggio = 0;

function myFunction2() {

    for(let i = 0; i < 5; i++) {
        numero = parseInt(prompt('Inserisci numero'));
        
        if(Number.isInteger(numero) === false) {
            alert('Inserisci numero valido');
            i--;
        } else if(randomArray.includes(numero)) {
            arrayInseritiCorretti.push(numero);
            punteggio++;

        }

    }

    mostraPunteggio();
    
}

// mostriamo il punteggio

function mostraPunteggio() {
    timer.innerHTML = `Hai indovinato ${punteggio} numeri su 5.`;
    timer.innerHTML += ` I numeri indovinati sono ${arrayInseritiCorretti}`;
}