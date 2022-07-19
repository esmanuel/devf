//FIFO primero en entrar primero en salir

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        /* if(this.size() == 0) {
            return "esta vacio"
        } else {
            "no esta vacio"
        } */
        return this.size() == 0
    }

    front() {
        return this.peek()
    }

    back() {
        return this.items[this.items.length - 1]
    }

    print() {
        console.log(this.items)
    }

}
/* 
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. 
*/
// let queue = new Queue();


// queue.enqueue("amarillo")
// queue.enqueue("rosa")
// queue.enqueue("rojo")
// queue.enqueue("verde")
// queue.enqueue("azul")
// queue.enqueue("negro")
// queue.enqueue("morado")
// queue.enqueue("blanco")



// function dividirQueue (queue) {
//     let queue1 = new Queue();
//     let queue2 = new Queue();
//     let q = 1;
//     // let salida = queue.dequeue();
//     let size = queue.size();
//     //recorrer fila
//     for (let i = 0; i < size; i++) {
//         //si numero es par mover a fila 2
//         if (q % 2 == 0) {
//             queue2.enqueue(queue.dequeue());
//         }else{
//             queue1.enqueue(queue.dequeue());
//         }
//         q++;
//     }
//     return queue1.print() + queue2.print();
// }
// dividirQueue(queue);

/*
2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

*/

// let queue = new Queue();

// queue.enqueue({ user: 'User1', ticket: true })
// queue.enqueue({ user: 'User2', ticket: true })
// queue.enqueue({ user: 'User3', ticket: false })
// queue.enqueue({ user: 'User4', ticket: true })
// queue.enqueue({ user: 'User5', ticket: false })
// queue.enqueue({ user: 'User6', ticket: false })
// queue.enqueue({ user: 'User7', ticket: true })
// queue.enqueue({ user: 'User8', ticket: true })
// queue.enqueue({ user: 'User9', ticket: true })
// queue.enqueue({ user: 'User10', ticket: false })
// queue.enqueue({ user: 'User11', ticket: true })


// const sinColados = queue => {

//     let sinTicket = new Queue
//     let size = queue.size();
//     // let fuera = queue.dequeue()
    
// for (let i=0; i < size; i++){
//     if(queue.peek().ticket){
//         queue.enqueue(queue.dequeue());
//     }else{
//         sinTicket.enqueue(queue.dequeue())
//     }
    
// }
// return 'Con ticket: ' + queue.print() + ' Sin ticket: ' + sinTicket.print();
// }
// sinColados(queue);

/*

*/