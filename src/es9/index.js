//ES9 - Lanzamiento junio 2018

/**
 * 1. Spread Operator - Operador de propagacion, permite expresion sea expandida
 * en situaciones donde se esperan multiples arugmentos
 */

const obj = {
  name: 'Anibal',
  age: 28,
  country: 'CO',
};
//..all representa los datos del objeto de edad y country
let { name, ...all } = obj
console.log(all); //return 28, CO

const obj = {
  name: 'Anibal',
  age: 28,
};

const obj2 = {
  ...obj,
  country: 'CO',
};

console.log(obj2);

/**
  * 2. Promise.finally: validar cuando una promesa termino de ejecutar
  */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello Wolrd!'), 5000)
      : reject(new Error('Test eror'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizado'))

/**
 * 3. Regex: mejor manejo de expresiones regulares
 */

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-20');
 const year = match [1];
 const month = match[2];
 const day = match[3];
 console.log(year, month, day);