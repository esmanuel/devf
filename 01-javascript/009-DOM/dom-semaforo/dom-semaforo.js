/* Ejercicio del semáforo nueva forma con DOM:
1. Obtener los circulos de semáforo en un array
2. Usar ese array dentro de una función para cambiar el color y recórrelo con un for
3. pistas puden usar:
.className()
.getAttribute()
.classList */


let circulos = document.getElementsByClassName('circulo');
console.log(circulos);




setInterval(cambiarLuz, 2000); // Funcion en el primer parametro llama la funcion cambiarLuz y el segundo parametro el tiempo en el que cambia.

let i = 0;
function cambiarLuz(){
    var color =circulos.getAttribute('color')
    circulos.style.backgroundColor="color";
}
cambiarLuz();