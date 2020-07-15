//ES&  = Lanzamiento junio 2015
//dafault params javascript
function newFunction(name, age, country) {
  var name = name || 'Anibal';
  var age = age || '28';
  var country = country || 'CO';

  console.log(name, age, country);
}

//use ES6 default params
function newFunction2(name = 'Anibal', age = 28, country = 'CO') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Fabio', 40, 'ARG');

const hello = 'hello';
const world = 'world';

const phrase1 = hello + ' ' + world;
console.log(phrase1);

//concatenation with template literals ES6
const phrase2 = `${hello} ${world}`;
console.log(phrase2);

//multiline javascript
let lorem =
  'Hola soy un parrafo largo y lo que quiero es un salto de linea \n' +
  'lo estamos uniendo de la forma facil en javascript';

//multiline ES6 and template string or template literals
let lorem2 = `Hola soy un parrago largo y lo que quiero es un salto de linea 
lo estamos haciendo con template strings en ES6`;

console.log(lorem);
console.log(lorem2);

//destructuring
let person = {
  name: 'Anibal',
  age: 28,
  country: 'CO',
};

console.log(person.name, person.age);

//destructuring ES6
let { name, age } = person;

console.log(name, age);

//var scope global
{
  var globalVar = 'Global var';
}

//let scope block
{
  let globalLet = 'Global let';
  console.log(globalLet);
}

console.log(globalVar);

//const scope block definition constants
const a = 'b';
a = 'a';
console.log(a);

//parameter object

let name = 'Anibal';
let age = 28;

//definition object ES5
obj = { name: name, age: age };

//definition object ES&
obj2 = { name, age };

console.log(obj);
console.log(obj2);

const names = [
  { name: 'Anibal', age: 28 },
  { name: 'Cindy', age: 23 },
];

//iterar with method map and function anonima
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//Arrow function ES6 =>
let listOfNames2 = names.map((item) => console.log(item.name));

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numArray2 = numArray.map((item) => item * 2);
console.log('numArray =>', numArray);
console.log('numArray2 =>', numArray2);

let orders = [
  {
    orderNum: 1,
    total: 100,
    customer: {
      name: 'Anibal Ortega',
    },
    orderNum: 2,
    total: 300,
    customer: {
      name: 'Cristiano Ronaldo',
    },
    orderNum: 3,
    total: 400,
    customer: {
      name: 'Dinamita',
    },
  },
];

let simpleOrder = orders.map((order) => {
  return {
    num: order.orderNum,
    totales: order.total,
    customerName: order.customer.name,
  };
});

console.log('orders =>', orders);
console.log('simpleOrders=>', simpleOrder);

//arrow function with paramters
const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};

listOfNames3('Anibal', 28, 'CO');

//arrow function with in only parameter
const listOfNames4 = (num) => {
  console.log(num * 2);
};

listOfNames4(3);

//arrow function direct operations without return and keys
const square = (num) => num * num;

//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey! good');
    } else {
      reject(new Error('Ups!!'));
    }
  });
};

helloPromise()
  .then((data) => console.log(data))
  .then(() => console.log('other then'))
  .catch((err) => console.log(err));

//class, modules and generator

class calculator {
  constructor() {
    //variables scope global
    this.valueA = 0;
    this.valueB = 0;
  }
  //definition the method sum
  sum(valueA, valueB) {
    //asignar valores de la clase a los que recibo
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

//creo una instancia de la calculadora
const calc = new calculator();
console.log(calc.sum(2, 4));

//import and exports
import { hello } from './module';
hello();

//generator es6
function* helloWorld() {
  if (true) {
    yield 'hello, ';
  }
  if (true) {
    yield 'world';
  }
}

const genetatorHello = helloWorld();
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);
console.log(genetatorHello.next().value);

let b = 'a';
let b = 'b';
