// PASO 1: DEFINIR VARIABLES
let nombreCompleto;
let anioActual; 
let anioNacimiento;
let edad;

//PASO DOS: SOLICITAR LOS DATOS

nombreCompleto = prompt('Ingresa tu nombre completo: ');
anioActual = prompt('Ingresa el año actual: ');
anioNacimiento = prompt('Ingresa el año de tu nacimiento: ');

//TERCER PASO DESARROLLO LOGICA
edad = Number(anioActual) - Number(anioNacimiento);

//CUARTO PASO: MOSTRAR RESULTADO.
document.write('¡Hola ' + nombreCompleto + ' tu edad aproximada es: ' + edad + '.');
