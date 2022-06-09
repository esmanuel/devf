
// let pokemons:["dito", "pikachu","charmander","chicorita", "bulbasaur"];

// for(let i = 0;i < pokemons.length; i++){
//     console.log(pokemons[i]);
//     pokemons.pop();
//     console.log(i);
// }

//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */
 let numero=prompt('Introduce un numero: ')
 for(i= 1; i <= numero ; i++){
    
     if(i % 5 === 0 ){
         console.log(`El numero ${i} es multiplo de 5`)
     }
 }

//while se usa cuando no sabes cuantas numeras de veces vas a iterar
//for si sabes cuantas veces vas a iterar
/* Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */


numero1=Number(prompt('Introduce un numero entre 1 y 50: '));
numero2=Number(prompt('Introduce otro numero entre 1 y 50: '));

for(i=1; i<=50; i++){
    if(i === numero1 || i===numero2){
    console.log(`LOTERIA!!!`);
    }else{
    console.log(i);
    }
}

/* Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

// numeroUno=Number(prompt('Ingresa un numero: '));
// numeroDos=Number(prompt('Ingresa un numero: '));
// numeroTres=Number(prompt('Ingresa un numero: '));

