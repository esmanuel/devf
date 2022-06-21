const arrayObjetos = [
    {
        id: 1,
        usuario: 'Oscar',
        password: '1234',
        edad: 18,
        saldo: 1500,
    },
    {

        id: 2,
        usuario: 'Andres',
        password: 'asdf',
        edad: 21,
        saldo: 100,

    },
    {

        id: 3,
        usuario: 'Ana',
        password: 'hola',
        edad: 15,
        saldo: 1010,

    },
    {

        id: 4,
        usuario: 'Paula',
        password: 'adios',
        edad: 19,
        saldo: 980,

    }
];
//combinar map y filter
function obtenerNombresYEdades(item){
    return{
        nombre: item.usuario,
        saldo: item.saldo,
        
    }
}
function filterUsuarioConSaldoMayor(item){
    return item.saldo>1000;
}
const resultado = arrayObjetos.map(obtenerNombresYEdades).filter(filterUsuarioConSaldoMayor);
console.log(resultado)
