// PASO 1: DEFINIR VARIABLES
let nombreCompleto;
let anioActual; 
let anioNacimiento;
let edad;
let resultado;

//PASO DOS: SOLICITAR LOS DATOS

nombreCompleto = prompt('Ingresa tu nombre completo: ');
anioActual = Number(prompt('Ingresa el año actual: '));
anioNacimiento = Number(prompt('Ingresa el año de tu nacimiento: '));

//TERCER PASO DESARROLLO LOGICA

if(anioActual!=='number' || anioNacimiento!=='number'){
    resultado = 'Por favor ingresa datos validos (números).';
}else{
    edad = anioActual - anioNacimiento;
    resultado =`Hola ${nombreCompleto}, tu edad aproximada es ${edad}`;
}

//CUARTO PASO: MOSTRAR RESULTADO.
document.write(resultado);