//ES8  = Lanzamiento Junio de 2017

/**
 * 1. Object entries: Convertir un objeto a una matriz de elementos, también puedo acceder al tamaño de la matriz
 */


const data = {
  frontend: 'Anibal',
  backend: 'Isabel',
  desing: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
console.log('Hola soy ' + entries[0][1]);

/**
  * 2. Object value: Convierte un objeto a un array de values del objeto, también podemos acceder al tamaño del array
  */

const data = {
  frontend: 'Anibal',
  backend: 'Isabel',
  desing: 'Ana',
};

const value = Object.values(data);
console.log(value);
console.log(value.length);
console.log('Hola soy ' + value[0]);

/**
 * 3. Padding: anteponer y posponer elementos
 */

const string = 'World';
console.log(string.padStart(7, 'hi'));
console.log(string.padStart(11, 'Hello '));
console.log(string.padEnd(9, ' ---'));
console.log('food'.padEnd(9, '  ---'))

/**
 * 4. Trailing comas: terminar los elementos de un objeto indicando que puede seguir otro
 */


const data = {
  frontend: 'Anibal',
};

/**
 * 5. Use async/await - use try/catch
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hey!! cool'), 3000)
      : reject(new Error('Test error'))
  })
};

const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (err) {
    console.log(err);
  }
};

helloAsync();