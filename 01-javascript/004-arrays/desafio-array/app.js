/*
    solicitar nombres y apellidos al usuario
    1.-solicitar nombres completos de los miembros de la familia
    2.-convertir nombres a un array de nombres de la familia y mostrarlo en consola
    3.-combinar los dos array en uno solo y reordenarlo de atras hacia adelante y lo vamos a 
    mostrar al ussuario  agregar validaciones necesarias
*/
//SOLICITAR NOMBRE AL USUARIO
let miNombre=[];
let nombresFamilia=[];

//MI NOMBRE
miNombre.push(prompt('Ingresa tu nombre completo: '));
console.log(miNombre);

//NOMBRES DE FAMILIA
nombresFamilia.push(prompt('Ingresa nombre de un miembro de la familia'));
nombresFamilia.push(prompt('Ingresa nombre de otro miembro de la familia'));
nombresFamilia.push(prompt('Ingresa nombre de un ultimo miembro de la familia'));

console.log(nombresFamilia);

//TODOS LOSNOMBRES EN UN ARRAY
let todosNombres = miNombre.concat(nombresFamilia);
console.log(todosNombres);

//reordenar array de atras hacia adelante
let nombresAtras= todosNombres.reverse();
document.write(`<h4>En este documento mostramos los nombres al reves de como fueron introducidos: <br>
Array al reves:</h4> <h6>${nombresAtras}</h6>`);
