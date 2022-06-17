/* Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
Persona 1
Persona 2
Persona 3
Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

            var cuentas = [
            { nombre: “Mali”, saldo: 200 }
            { nombre: “Gera”, saldo: 290 }
            { nombre: “Maui”, saldo: 67 }
            ];
Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
Consultar saldo
Ingresar monto
Retirar Monto

Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta

Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.

Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio. 
*/

//deposito si saldo mas deposito es menor o igual que 990 ---procede // de lo contrario alerta o mensaje alerta o mensaje con maximo de saldo
//retiro si saldo es mayor o igual a 10--- no procede // de lo contrario alerta o mensaje con minimo saldo

//PANELES 
let inicioDeSesion= document.getElementById('inicioDeSesion');;
let inicioOperaciones=document.getElementById('inicioOperaciones');;
let inicioOperacionDeposito=document.getElementById('inicioOperacionDeposito');
let inicioOperacionRetiro=document.getElementById('inicioOperacionRetiro');
let inicioOperacionSaldo=document.getElementById('inicioOperacionSaldo');

let usuario;
let contrasena;
let usuarioActivo;
//como creo una variable con los datos de un usuario que esta activo en sesion?? let usuario activo

const cuentas=[
    {
        nombre:'Manuel',
        saldo:300,
        password:12345678,
    },
    {
        nombre:'Alejandro',
        saldo:350,
        password:12345678,
    },
    {
        nombre:'Angelica',
        saldo:900,
        password:12345678,
    },
];
document.getElementById('iniciarSesion').addEventListener('click', iniciarSesion);
function iniciarSesion(){
    //obtener valores usuario y contraseña
    usuario = document.getElementById('usuario').value;
    contrasena =document.getElementById('contrasena').value;

//Validacion usuario y contraseña
    if(usuario == cuentas[1].nombre && contrasena == cuentas[1].password){

        inicioDeSesion.classList.add('invisible');
        inicioDeSesion.classList.remove('visible');

        inicioOperaciones.classList.add('visible');
        inicioOperaciones.classList.remove('invisible');
    }else{
        alert('La contraseña y/o el usuario son incorrectos. Verifique sus datos.')
    }
};





document.getElementById('btn-depositar').addEventListener('click',depositar);

function depositar(){
    

    inicioOperacionDeposito.classList.add('visible');
    inicioOperacionDeposito.classList.remove('invisible');

    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

}

document.getElementById('btn-cantidadDeposito').addEventListener('click',cantidadDeposito);
function cantidadDeposito(){
    let valorADepositar=Number(document.getElementById('valorDeposito').value);
    if((valorADepositar+cuentas[1].saldo)<=990){
        cuentas[1].saldo=(valorADepositar+cuentas[1].saldo);

        inicioOperacionDeposito.classList.add('invisible')
        inicioOperacionDeposito.classList.remove('visible')
        inicioOperacionSaldo.classList.remove('invisible');
        inicioOperacionSaldo.classList.add('visible');

        let divHijoSaldo= document.getElementById('hijoSaldo')
        let H2 = document.createElement('h2');
        let texto= document.createTextNode(`Depositaste:        $${valorADepositar}`);
        H2.appendChild(texto);
        divHijoSaldo.prepend(H2);

        let nuevoSaldo = document.getElementById('resultadoSaldo');
        nuevoSaldo.value = `$${cuentas[1].saldo}`;

    }else{
        let maximo=990-cuentas[1].saldo;
        alert(`Solo puedes depositar $${maximo} para tener un max. de $990 en tu cuenta. `)
    }
}

document.getElementById('btn-salir').addEventListener('click',salir);

function salir(){
    alert('Estas saliendo de tu sesión. ¡Te esperamos pronto!');

    inicioDeSesion.classList.add('visible');
    inicioDeSesion.classList.remove('invisible');

    inicioOperaciones.classList.add('invisible')
    inicioOperacionDeposito.classList.add('invisible')
    inicioOperacionRetiro.classList.add('invisible')
    inicioOperacionSaldo.classList.add('invisible')

    inicioOperaciones.classList.remove('visible')
    inicioOperacionDeposito.classList.remove('visible')
    inicioOperacionRetiro.classList.remove('visible')
    inicioOperacionSaldo.classList.remove('visible')

}