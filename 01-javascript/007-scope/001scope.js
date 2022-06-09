//scope es el alcance d euna variable
//global
var hi = "HI";// var scope-funcion


const hola= "hola"; 
let bonjour= "Bonjour"

//funcion
function saludar(nombre){
    console.log(`Hola ${nombre} desde funcion` );
    for(const i=0; i<5; i++){
        console.log(`Hola ${nombre} desde for` );
        if(i ===2){
            let genero= "M";
            console.log(`hola ${nombre} desde if`);
            console.log(genero);
        }
    }
}
saludar('manuel');