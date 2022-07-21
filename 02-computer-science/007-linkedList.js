class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head
  }
  //INSERTAR NODO NUEVO
  insert(data) {
    let node = new Node(data);
    // REvisar si la lista está vacía (head -> null)
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head
      //Hacemos un loop While para que corra mientras current.next != null (no apunte a null)
      while (current.next != null) {
        current = current.next
      }
      current.next = node;
    }
  }

  //ELIMINAR ELEMENTO DE LA LISTA
  delete(data) {
    let current = this.head;
    let prev = this.head;
    //hacemos un while que va a correr mientras current.data != data (mientras no apunte a data)
    while (current.data !== data) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }

  //IMPRIMIR LISTA

  print() {
    let current = this.head;
    let rep = '';

    while (current.next !== null) {
      rep += `${current.data} -> `;
      current = current.next;

    }
    rep += `${current.data} -> null`;
    console.log(`Estos son los elementos dentro de la lista: 
  ${rep}`);
  }

  //BUSCAR ELEMENTO DENTRO DE LISTA
  search(data) {
    let current = this.head;

    while (current.data !== data) {
      //Si current.next == null, es decir, recorrio toda la data y no encontró el dato que buscamos.
      if (current.next == null && current.data !== data) {
        return false;
      }
      current = current.next;
    }
    return console.log(current);
  }
  //EJERCICIO 1 INSERTAR ELEMENTO QUE NO SE REPITA
  insertNoRepetido(data) {
    //Si el dato intrudicido es falso en la busqueda, introducirlo.
    if (this.search(data) == false) {
      this.insert(data);
    }
  }

  //EJERCICIO 2 MUESTRA LOS ELEMENTOS MAYORES AL NUMERO INTRODUCIDO POR EL DATO.
  mayorQue(data){
    let current = this.head;
    let rep = '';

    while(current.next!== null){
      if(current.data > data){
        rep+= `${current.data}, `;
      }
      current = current.next;
    }
    console.log(rep);
  }
}

//Creamos una Linked List (ll)
let ll = new LinkedList();

//Insertamos elementos
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(6);
ll.insert(7);
ll.insert(8);
ll.insert(15);

//Elimina elemento...
ll.delete(3);

//Imprimir elementos de lista
ll.print();

//buscar dato
ll.search(8);

//regresa los datos mayores que...
ll.mayorQue(5);


