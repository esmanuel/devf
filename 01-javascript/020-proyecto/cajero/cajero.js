
//PANELES 
let inicioDeSesion = document.getElementById('inicioDeSesion');;
let inicioOperaciones = document.getElementById('inicioOperaciones');;
let inicioOperacionDeposito = document.getElementById('inicioOperacionDeposito');
let inicioOperacionRetiro = document.getElementById('inicioOperacionRetiro');
let inicioOperacionSaldo = document.getElementById('inicioOperacionSaldo');

//VARIABLES
let usuario;
let contrasena;
let usuarioActivo;
let index;
let nuevoSaldo;
let divHijoSaldo;
let retiroH3
let depoH3;
let texto;


const cuentas = [
    {
        nombre: 'Manuel',
        saldo: 300,
        password: '1234',
    },
    {
        nombre: 'Deni',
        saldo: 350,
        password: 'qwerty',
    },
    {
        nombre: 'Angelica',
        saldo: 900,
        password: 'asdf',
    },
];

function iniciarSesion() {
    //obtener valores usuario y contraseña
    usuario = document.getElementById('usuario').value;
    contrasena = document.getElementById('contrasena').value;
    console.log(usuario, contrasena);

    function validador(element) {
        return element.nombre === usuario;
    }
    index = cuentas.findIndex(validador);
    cuentas[index];

    //Validacion usuario y contraseña
    if (index === -1) {
        alert('La contraseña y/o el usuario son incorrectos. Verifique sus datos.')
    } else if (contrasena !== cuentas[index].password) {
        alert('La contraseña y/o el usuario son incorrectos. Verifique sus datos.')

    } else {
        inicioDeSesion.classList.add('invisible');
        inicioDeSesion.classList.remove('visible');

        inicioOperaciones.classList.add('visible');
        inicioOperaciones.classList.remove('invisible');
    }
};

//click boton DEPOSITAR
function depositar() {

    inicioOperacionDeposito.classList.add('visible');
    inicioOperacionDeposito.classList.remove('invisible');

    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionSaldo.classList.remove('visible');
    inicioOperacionSaldo.classList.add('invisible');

}

//Click REALIZAR DEPOSITO
function cantidadDeposito() {
    let valorADepositar = Number(document.getElementById('valorDeposito').value);
    if ((cuentas[index].saldo + valorADepositar) > 990) {
        let maximo = 990 - cuentas[index].saldo;
        alert(`Solo puedes depositar $${maximo} para tener un max. de $990 en tu cuenta. `);

    } else {

        cuentas[index].saldo = (valorADepositar + cuentas[index].saldo);

        inicioOperacionDeposito.classList.add('invisible');
        inicioOperacionDeposito.classList.remove('visible');
        inicioOperacionSaldo.classList.remove('invisible');
        inicioOperacionSaldo.classList.add('visible');

        divHijoSaldo = document.getElementById('hijoSaldo')
        depoH3 = document.createElement('h3');
        texto = document.createTextNode(`Depositaste: $${valorADepositar}`);
        depoH3.appendChild(texto);
        divHijoSaldo.prepend(depoH3);

        nuevoSaldo = document.getElementById('resultadoSaldo');
        nuevoSaldo.value = `$${cuentas[index].saldo}`;

        divHijoSaldo.removeChild(retiroH3);
    }
}

//click boton RETIRAR
function retirar() {

    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionRetiro.classList.remove('invisible');
    inicioOperacionRetiro.classList.add('visible');

    inicioOperacionSaldo.classList.remove('visible');
    inicioOperacionSaldo.classList.add('invisible');
}

//click REALIZAR RETIRO
function cantidadRetiro() {
    let valorARetirar = Number(document.getElementById('numeroRetiro').value);
    if ((cuentas[index].saldo - valorARetirar) < 10) {
        let minimo = cuentas[index].saldo - 10;
        alert(`Solo puedes retirar $${minimo}. Recuerda debes tener un min. de $10 en tu cuenta. `)

    } else {

        cuentas[index].saldo = (cuentas[index].saldo - valorARetirar);

        inicioOperacionRetiro.classList.add('invisible')
        inicioOperacionRetiro.classList.remove('visible')
        inicioOperacionSaldo.classList.remove('invisible');
        inicioOperacionSaldo.classList.add('visible');

        divHijoSaldo = document.getElementById('hijoSaldo')
        retiroH3 = document.createElement('h3');
        texto = document.createTextNode(`Retiraste: $${valorARetirar}`);
        retiroH3.appendChild(texto);
        divHijoSaldo.prepend(retiroH3);

        nuevoSaldo = document.getElementById('resultadoSaldo');
        nuevoSaldo.value = `$${cuentas[index].saldo}`;

        divHijoSaldo.removeChild(depoH3);
    }
}

//click CONSULTAR SALDO
function saldo() {
    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionSaldo.classList.add('visible');
    inicioOperacionSaldo.classList.remove('invisible');

    let saldoUsuario = document.getElementById('resultadoSaldo');
    saldoUsuario.value = `$${cuentas[index].saldo}`;
}
//click boton SALIR
function salir() {
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
