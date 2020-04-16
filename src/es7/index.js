//ES7 = Lanzamiento junio 2016

/**
 * 1. use include, search in array
 */

const name = ['Anibal', 'Cindy', 'Fabio'];

if(name.includes('Anibal')) {
    console.log('Si encontre Anibal');
} else {
    console.log('No lo encontre');
}

let numbers = [1, 2, 3, 7, 8, 9];

const searchNumber = 8;

if(numbers.includes(searchNumber)) {
    console.log(`Si encontre el valor de ${searchNumber}`);
} else {
    console.log('No se encuentra.')
}

/**
 * 2. Elevar a la potencia **
 */

 let base = 4;
 let exponent = 3;
 let result = base ** exponent;
 console.log(`El resultado es ${result}`);