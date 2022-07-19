/*LIFO Ultimo en entrar primero en salir

.push agrga al final
.pop retira el ultimo
.peek retorna ultimo valor ingresado
.size retorna numero de elementos
.print muestra el contenido de pila
*/
class Stack {
    constructor() {
        this.items = []
    }
push(item){
  return  this.items.push(item)
};
pop(){
    return this.items.pop()
};
peek(){
    return this.items[this.items.length - 1];
};
size(){
    return this.items.length;
};
print(){
    console.log(this.items);
};

}

/*
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
*/

// let stack = new Stack(); 

// stack.push(3)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(6)
// stack.push(8)
// stack.push(1)
// stack.push(2)
// stack.push(5)
// stack.push(5)
//USANDO WHILE MAS EFICIENTE, MENOS CODIGO
// function reemplazar(stack, nuevo_n, viejo_n) {
//     // Recorrer la pila
//     let size = stack.size()
    
//     while(viejo_n !== stack.pop());
//     stack.push(nuevo_n)
    
//     stack.print()
//   } 

//USANDO FOR...
// function reemplazar(stack, nuevo_n, viejo_n) {
//   // recorrer la pila
//   let size = stack.size();
//     for(let i=0 ; i < size; i++){
//         //comparar con viejo n
//         if(viejo_n === stack.pop()){
//             //reemplazar viejo n con nuevo n
//             stack.push(nuevo_n);
//             break
//     }
// }
// stack.print(); 
// }


// console.log(reemplazar(stack,10,4));

// ----------------------------------------------------- //
/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 

*/
let stack3 = new Stack(); 
let stackVuelta = new Stack();
stack3.push("Pueblo Origen")
stack3.push("Pueblo 1")
stack3.push("Pueblo 2")
stack3.push("Destino")

function camino_recorrido() {
  stack3.print();
  let size = stack3.size();
   for(let i = 0; i<size; i++){ 
    if(stackVuelta.size() !== size){
  let recorrido = stack3.pop();
    stackVuelta.push(recorrido);
    }
  }
  return stackVuelta.print();
  }
camino_recorrido();

/*
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro), de arriba para abajo.

*/
let stack1 = new Stack();
let stackExt = new Stack(); 

stack1.push('Manzana')
stack1.push('Cebolla')
stack1.push('Apio')
stack1.push('Naranja')
stack1.push('Papaya')
stack1.push('Sandía')
stack1.push('Melón')

function ret_elementos(stack1,n) {
  let size = stack1.size();
  for(let i = 0; i<size; i++){
    
    if(stackExt.size() !== n){
    let extraer = stack1.pop();
    stackExt.push(extraer); 
  }
}
return stackExt.print();
}
ret_elementos(stack1,4);

/*
4.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene una posición. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

*/

// let stack4 = new Stack(); 
// let stackAux = new Stack();
// stack4.push(3)
// stack4.push(2)
// stack4.push(3)
// stack4.push(4)
// stack4.push(6) // <- Este elemento está en la posición 4
// stack4.push(8)
// stack4.push(1)
// stack4.push(2)
// stack4.push(5)
// stack4.push(5)

// function retirar_contenedor_pos(stack4,pos) {

//   }
// retirar_contenedor_pos(stack4,4);

/* 
5.-  Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
*/
// let stack = new Stack(); 
// let stackAux = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4) // <- Este elemento tiene el id 4
// stack.push(5) 
// stack.push(6)
// stack.push(7)
// stack.push(8)
// stack.push(9)


// function retirar_contenedor_id(stack,id) {
  
 
// } 
// retirar_contenedor_id(stack,4);