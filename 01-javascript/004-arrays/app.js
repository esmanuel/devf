// variables
let miArray = [];

// mostrar numero de elementos contenidos en array.

console.log(miArray.lenght);

// agregar valores a un Array
miArray.push(prompt('Ingresa el nombre de una fruta: '));
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra fruta:'));
console.log(miArray);

//agregar array al principio
miArray.unshift(prompt('Ingresa el nombre de otra fruta:'));
console.log(miArray);

// eliminar ultimo elemento
miArray.pop();
console.log(miArray);

// eliminar primer elemento
miArray.shift();
console.log(miArray);

// extraer palabras de string y convertirlas en array
let nombreCompleto = 'Manuel Alejandro Bernal Flores';
let arregloNombre = nombreCompleto.split(' '); //escribir espacio para separ palabra y no letra por letra.
console.log(arregloNombre);

// eliminar elementos de un array a partir de su indice
let arregloApellidos= arregloNombre.slice(2);

console.log(arregloApellidos);

let arregloPrimerApellido = arregloNombre.slice(2,3);
console.log(arregloPrimerApellido);

//agregar elementos al array en una posicion especifica y reemplazar si queremos

arregloApellidos.splice(1,1, arregloNombre); //En el parametro uno empieza donde va a agregar el tercer prametro y elimina un elemento despues de el elemento uno
console.log(arregloApellidos);

// ordenar elementos de array alfabeticamente
let arrayOrdenado = arregloNombre.sort();
console.log(arrayOrdenado);

// array ordenado
arrayOrdenado.reverse();
console.log(arrayOrdenado);

//concatenar arreglos
let arregloConcatenado = arregloNombre.concat(arrayOrdenado, arregloApellidos);
console.log(arregloConcatenado);