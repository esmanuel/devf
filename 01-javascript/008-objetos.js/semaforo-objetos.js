// //COLORES DEL SEMAFORO EN OBJETO
// const colores = {
//     green,
//     red,
//     yellow,
// };

// COLORES CSS, SE USA NOMBRE EN INGLES PORQUE ASI SE INDENTIFICAN LOS NOMBRES EN CSS
const green = 'green';
const red = 'red';
const yellow = 'yellow';

const indicadores = {
    ROJO: 3,
    AMARILLO: 2,
    VERDE: 1,
};
const { ROJO, AMARILLO, VERDE } = indicadores;
const colorApagado = '#ececec';

const semaforo = {
    color: 'red',
    siguienteLuz: 'rojo',
    anteriorLuz: '',
    luzActual: ROJO,

}
let { color, siguienteLuz, anteriorLuz, luzActual } = semaforo;

function cambiarLuz() {
    switch (luzActual) {
        case ROJO:                          // EN CASO DE LUZ ROJO
            color = 'green';                // CAMBIA ESTE COLOR CSS
            siguienteLuz = 'verde';         // SE ASIGNA EL COLOR AL SIGUIENTE ELEMENTO EN ID HTML
            anteriorLuz = 'rojo';           // COLOR ANTERIOE AL CAMBIO EN ELEMENTO HTML
            luzActual = VERDE;              // LUZ ENCENDIDA VERDE
            break;
        case VERDE:
            color = 'yellow';
            siguienteLuz = 'amarillo';
            anteriorLuz = 'verde';
            luzActual = AMARILLO;
            break;
        case AMARILLO:
            color = 'red';
            siguienteLuz = "rojo";
            anteriorLuz = 'amarillo';
            luzActual = ROJO;
            break;
        default:
            color = 'red';
            siguienteLuz = 'rojo';
            luzActual = ROJO;
            break;
    }
    const prenderLuz = document.getElementById(siguienteLuz); //SE CREA LA const prenderLuz y se le asigna la variable 'siguienteLuz'
    prenderLuz.style.backgroundColor = color;                  //A const prenderLuz se le asigna la variable 'color'

    const apagarLuz = document.getElementById(anteriorLuz);    // SE CREA LA const apagarLuz = y se le asigna 'anteriorLuz'
    apagarLuz.style.backgroundColor = colorApagado;            // A const 'apagarLuz' se le asigna const 'colorApagado'
}
setInterval(cambiarLuz, 2000); // Funcion en el primer parametro llama la funcion cambiarLuz y el segundo parametro el tiempo en el que cambia.