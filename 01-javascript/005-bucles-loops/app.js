const miArray=["a","b","c"];
console.log(miArray.lenght);
miArray[0];

//console.log(miArray) //muestra resultado el contenido del array.
 var i=0;
while(i < 3){
    console.log(miArray[i]);
    i++;
}; 
// elimina de atras hacia adelante los elementos del array
while(miArray.lenght>0){
    console.log(miArray[miArray.lenght]);
    console.log(miArray.pop());
}


