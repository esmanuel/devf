
/*
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.
Extra 01: Hacer el semáforo con HTML y CSS
Reto: Hacer que se cambie de forma automática de color
*/

//asignar un valor a color
//funcion colores del semaforo verde, amarillo y rojo
//ejecutarla o llamarla nos de el cambio de color

 
           
            



let semaforo= ["rojo","amarillo","verde"];

    
    for(var i = 0; i < semaforo.length; i++ ){
        console.log(semaforo[i]);
   }
        
//setInterval(cambiarLuz,2000);

const ROJO =3
const AMARILLO=2
const VERDE=1;
    
let color;
let luzActual=-1;
let siguienteLuz;
let anteriorLuz;

function cambiarLuz(){
    switch(luzActual){
        case ROJO:
            color:"red"
            siguienteLuz:"verde" //id html
            anteriorLuz:"rojo";
            luzActual="RED";
            break;
        case AMARILLO:
            color:"yellow"
            siguienteLuz:"amarillo"
            anteriorLuz:"verde";
            luzActual="AMARILLO";
            break;
        case VERDE:
            color:"yellow"
            siguienteLuz:"amarillo"
            anteriorLuz:"verde";
            luzActual="VERDE";
            break;
    }
    const prenderLuz=document.getElementById(siguienteLuz);
    prenderLuz.style.backgroundColor = color;
    const apagarLuz=document.getElementById(siguienteLuz);
    prenderLuz.style.backgroundColor = color;
}
setInterval(cambiarLuz, 2000);
