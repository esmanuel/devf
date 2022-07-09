const usuarios =[
    {                   //0
        id:0,
        nombre:"Manuel",
        edad:"1234",
        esAdulto:true,
    },
    {                   //1
        id:1,
        nombre:"Haydee",
        edad:"1234",
        esVip:true,
    },
    {                   //2
        id:2,
        nombre:"Caro",
        edad:"1234",
        
    }
]
//Modificar nombre del segundo objeto
usuarios[2].nombre="Alejandra";
console.log(usuarios[1].nombre);

//
function validador(elemento){
    return elemento.id===2;
}
const index = usuarios.findIndex(validador);

usuarios[index];
    
