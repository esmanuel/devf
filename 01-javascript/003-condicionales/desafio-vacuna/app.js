// variables
let nombre;
let sexo;
let edad;
// let anioNacimiento;
let municipioFronterizo;
let embarazo;
let semanasGestacion;
// datos usuario vacuna
// nombre = prompt('Ingresa tu nombre: ');
// sexo= prompt('¿Cual es tu sexo?');
// anioNacimiento = Number(prompt('Ingresa tu año de nacimiento: '));
// edad = prompt('Ingresa tu edad: ');
// municipioFronterizo = prompt('Vives en un municipio fronterizo: ');
// embarazo = prompt ('¿Estas embarazada?');
// semanasGestacion = ('¿Cuantas semanas de gestación tienes?');

//variable.toLowerCase()
//variable.substring(1.1)
nombre = prompt('Ingresa tu nombre: ');
edad = prompt('Ingresa tu edad: ');


if(edad >= 29){
    resultado = `${nombre} puedes vacunarte.`
}else if(edad>=18){
    sexo= prompt('¿Cual es tu sexo?');

}else if(sexo==='mujer'){
        embarazo = prompt ('¿Estas embarazada?');
}else if(embarazo==='si'){
        semanasGestacion = prompt('¿Cuantas semanas de gestación tienes?');
}else if(semanasGestacion>=9){
    resultado = `${nombre} puedes vacunarte.`;
}
else if(municipioFronterizo === 'si'){
    resultado = `${nombre} puedes vacunarte.`;
}else{
    resultado = `Lo siento ${nombre} no te puedes vacunar.`;
}





// else if(embarazada==='si' && semanasGestacion >= 9){
//     resultado = `${nombre} puedes vacunarte.`
// }else{
//     resultado = `Lo siento ${nombre} no te puedes vacunar.`
// }


// if (edad >= 18 && municipioFronterizo === 'si'){
//     resultado = `${nombre} puedes vacunarte.`
// }else{
//     resultado = `Lo siento ${nombre} no te puedes vacunar.`
// }

document.write(resultado);