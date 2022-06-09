const gato={                // puede obtener cualquier valor o tipo de dato
    nombre:"Alfa",
    alias: "peluchin",
    apodo:"gato bola",
    raza:"siames",
    edad:6,
    color:["blanco", "gris"],
    vacunas:{
        tripefelina: "si",
        rabia: "no",
    },
};
gato.nombre="BOLAY";
console.log(gato);
console.log(gato.edad);
console.log(gato["edad"]);
console.log(gato.vacunas.rabia.toUpperCase());
console.log(gato?.vacunas?.influenza?.toUpperCase());

//DEstructuracion
const {nombre, alias, apodo, raza, edad, color, vacunas}= gato;    
//ES IGUAL QUE LA LINEA DE ARRIBA
// const nombre =gato.nombre;
// const alias=gato.alias;
// const apodo=gato.apodo;
// const raza=gato.raza;
// const edad=gato.edad;
// const color=gato.color;
// const vacunas=gato.vacunas;
