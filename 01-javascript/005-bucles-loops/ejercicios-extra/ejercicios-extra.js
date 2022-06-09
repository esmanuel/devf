/* 
1.-Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

            let datoUsuario = prompt('¿Eres bellisim@?')

            if(datoUsuario==='si'){
                console.log('Ciertamente, eres bellisim@.')
            }else{
                console.log('No lo creo!!.')
            };

2.-Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

            let numeroUsuario = Number(prompt('Ingresa un número: '));

            if(numeroUsuario % 2 ===0){
                console.log(`El numero ${numeroUsuario}, es multiplo de dos.` )
            }else{
                console.log(`El numero ${numeroUsuario}, NO es multiplo de dos.`)
            }

3.-Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

            let numeroUsuario = Number(prompt('Introduce un número: '))

            if(numeroUsuario % 2 === 0){
                alert(`El numero ${numeroUsuario} es PAR`)
            }else{
                alert(`El numero ${numeroUsuario} es IMPAR`)
            };

4.-Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

            let numeroUsuario = Number(prompt('Introduce un número: '))

            if(numeroUsuario === 1000){
                alert('FELICIDADES!! Ganaste un premio.')
            }else{
                alert(`Lo sentimos el número ${numeroUsuario} no es ganador, sigue participando`)
            };

5.-Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

            let numero1 = Number(prompt('Introduce un número: '));
            let numero2 = Number(prompt('Introduce otro número: '));

            if(numero1 >= numero2){
                console.log(`${numero2} es menor.`);
            }else{
                console.log(`${numero1} es menor.`);
            };

6.-Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

            numero1=Number(prompt('Ingresa un numero: '));
            numero2=Number(prompt('Ingresa un numero: '));
            numero3=Number(prompt('Ingresa un numero: '));


            if ( numero1 > numero2 && numero1 > numero3) {
                console.log(`${numero1} es más grande.`);
            }else if (numero2 > numero3){
                console.log(`${numero2} es más grande.`);
            }else{
                console.log(`${numero3} es más grande.`);
            };

7.-Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaUsuario=prompt('Ingrese un día de la semana de su preferencia: ');

   
   

8.-Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

9.-Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN. 
*/

//CICLO NECESITA: 
//CONTADOR valor inicial, 
//CONDICIÓN para detener el flujo de ciclos.
//INSTRUCCIÓN que aumente valor inicial, modifique el arreglo que se trabaja.



