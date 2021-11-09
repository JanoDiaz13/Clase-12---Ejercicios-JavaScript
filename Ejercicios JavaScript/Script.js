let log = console.log;

// Ejercicio 1

let n1 = 192;
let sum = 0;

function sumaDigitos(num) {


    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}
log(sumaDigitos(n1));

//Ejercicio 2

let string = "102 + 17";

function stringtoNumber(str) {
    let plus = str.indexOf("+");
    let n1 = parseInt(str.slice(0, plus));
    let n2 = parseInt(str.slice(plus + 1, str.length));
    return n1 + n2;
}

log(stringtoNumber(string))

//Ejercicio 3

let numero = prompt("Adivina un numero del 1 al 10");

function numRandom(num) {
    let rand = Math.floor(Math.random() * 10) + 1;
    let i;
    for (i = 0; i <= 5; i++) {
        rand == num ? log("Adivinaste el numero " + rand) : num = prompt("Intenta de nuevo, ingresa otro numero");
    }
}

log(numRandom(numero));