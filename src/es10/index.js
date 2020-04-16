//ES210 - Lanzamiento junio de 2019

/**
 * 1. Method flat: devolver una matriz con cualquier submatriz aplanada
 */

 let array = [1, 2, 3, [5, 6, 7, [8, 9, 10]]];
 console.log(array.flat(2)); //recibe como argumento la profundidad

/**
 * 2. Method flatMap: Me permite mapear cada elemento, pasarle una funcion y aplanar la matriz
 */

 let array = [1, 2, 3, 4, 5];
 console.log(array.flatMap(value => value * 2));


 let array = [1, 2, 3, 4, 5];
 console.log(array.flatMap(value => [value, value * 2]));
/**
 * 2. trim: trimStart - trimEnd
 */

 let hello = '             hello world!';
 console.log(hello);
 console.log(hello.trimStart());

 let hello = 'hello world!          ';
 console.log(hello);
 console.log(hello.trimEnd());

/**
 * 4. optional catch binding: ya no es necesario al catch pasar el argumento error para acceder a el
 */

 //uso en versiones anteriores

 try {
     
 } catch (error) {
     console.log(error);
 }

 //use optional error en catch ES10
 try {
     
 } catch {
     console.log(error);
 }

/**
 * 5. from Entries: transformar array en objetos
 */

 let entries = [['name', 'Anibal'], ['age', 28]];
 console.log(Object.fromEntries(entries));

/**
 * 6. Object symbol: añadir y acceder a la descripcion de un Objecto de tipo symbol
 */

 let mySimbol = 'My symbol';
 let symbol = Symbol(mySimbol);
 console.log(symbol.description);