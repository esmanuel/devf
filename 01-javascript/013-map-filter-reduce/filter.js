const arrayNumeros= [1,2,3,400,59,6987];
const arrayObjetos = [
    {
        id: 1,
        usuario: 'Oscar',
        password: '1234',
        edad: 18,
    },
    {

        id: 2,
        usuario: 'Andres',
        password: 'asdf',
        edad: 21,

    },
    {

        id: 3,
        usuario: 'Ana',
        password: 'hola',
        edad: 15,

    }
];
//filtra numeros solo mayores de 100
const filtrarPorCantidad = function(numero){
    return numero>=100;
}
const resultado =arrayNumeros.filter(filtrarPorCantidad);
console.log(resultado);
//filtra usuarios mayores de 18
function filtrarMayoresDeEdad(item){
    return item.edad >= 18;
}
const usuariosMayores = arrayObjetos.filter(filtrarMayoresDeEdad);
console.log(usuariosMayores);
