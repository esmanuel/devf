const usuarios =[
    {
        id:0,
        nombre:"",
        edad:"",
        esAdulto:true,
    },
    {
        id:1,
        nombre:"",
        edad:"",
        esVip:true,
    },
    {
        id:2,
        nombre:"",
        edad:"",
        
    }
]
//Modificar nombre del segundo objeto
usuarios[1].nombre="Carlos";

//
function validador(element){
    return element.id===2;
}
const index=usuarios.findIndex(validador);
usuarios[index]