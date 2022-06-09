//Numeros de vocales en un string
const vocales = ["a", "e", "i", "o", "u"];

const contarVocales = function (string) {
    let contadorDeVocales = 0;
    const arregloDeMiNombre = string.split("");
    console.log("LONGITUD", arregloDeMiNombre.length);

    for (let i = 0; i <= string.length; i++) {
        if (vocales.includes(arregloDeMiNombre[i])) {
        contadorDeVocales++; 
        };
        
    }
    return contadorDeVocales;
};
let misVocales = contarVocales('Manuel Alejandro Bernal Flores');
console.log(misVocales);
