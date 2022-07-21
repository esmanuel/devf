class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
};

class BinaryTree {
  constructor(root = null) {
    this.root = root
  }
  //METODO INSERTA UN NODO PARA CREAR UN ARBOL BINARIO, SI EL DATO ES MAYOR O MENOR.
  insert(data) {
    let node = new Node(data)

    //si el nodo raiz es null agregamos un nodo
    if (this.root == null) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
// Si DATA actual es mayor a data introducida y el nodo de la izquierda esta vacío SE ASIGNA Y CREA EL NODO en el lado izquierdo.
        if (current.left == null && current.data > data) {
          current.left = node;
          break;
// Si DATA actual es menor a data introducida y el nodo de la derecha esta vacío SE ASIGNA Y CREA EL NODO en el lado derecho.
        } else if (current.right == null && current.data < data) {
          current.right = node;
          break;
        }
// ASIGNAMOS CURRENT, al lado en el quese asigno la data.
        if (current.data < data) {
          current = current.right;
        } else {
          current = current.left;
        }

      }
    }
  }
}

let nuevoBT = new BinaryTree();
nuevoBT.insert(16);
nuevoBT.insert(28);
nuevoBT.insert(23);
nuevoBT.insert(45);
nuevoBT.insert(86);
nuevoBT.insert(17);
nuevoBT.insert(62);
nuevoBT.insert(51);
nuevoBT.insert(90);
nuevoBT.insert(6);

console.log(nuevoBT);