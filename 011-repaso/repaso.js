const array = [];

const otroArray = ['perro', 'gato', 'leon','hipopotamo','iguana'];

// Obtener longitud
console.log(otroArray.length);

//Obtener primer elemento del array
console.log(otroArray[0]);
//obtener elemento enmedio array
console.log(otroArray[Math.round((otroArray.length-1)/2)]);
//declara arreglo tecnologias web
let tecnologiasWeb = ['html', 'css', 'js', 'react', 'angular', 'nodeJs', 'vue', 'rubu on rails'];

//agregar a final del array
console.log(tecnologiasWeb.push('redux'));
//quitar
console.log(tecnologiasWeb.pop());

//borrar elemento de array
const indexreact = tecnologiasWeb.indexOf('react');

tecnologiasWeb.splice(indexreact,1);

//coprobar existencia elemento en array

console.log(tecnologiasWeb.includes('react'));

//unir
console.log(tecnologiasWeb.join(','));

//reversa
console.log(tecnologiasWeb.reverse().join(','));

//ordenar alfabetico
console.log(tecnologiasWeb.sort());

//
const arrayDeNumeros=[1,500,54,23,3098,31,2,76,45,990];
console.log(arrayDeNumeros.sort((a,b)=> a-b))