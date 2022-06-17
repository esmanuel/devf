const perro={
    nombre: 'brutus',
    patas:4,
    color:'blanco',
    edad: 1,
    ladrar: function(){
        console.log('guau guau')
    }
}
//
console.log(perro.nombre);
perro.nombre="no soy brutus";
console.log(perro.nombre);
//agregar propiedad a objeto
console.log(perro.id); 
console.log(perro.ladrar());