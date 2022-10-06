function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(elemento) {
  return this.array.push(elemento);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

Queue.prototype.size = function() {
  return this.array.length;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(valor) {
  var nuevoNodo = new Node(valor);

  if(!this.head){
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
}

LinkedList.prototype.remove = function() {
  if(!this.head){//  pregunta si no hay nodos y los elimina!!!
    return undefined;// devuelve undefinded pq nohay nodo pero existe 1 lugarr!!!
  }

  if(this.head.next === null){// [2] ---> null no hay nada!!
    var unicoNodo = this.head;// [2]!!
    this.head = null;// cambia el 2 a null elimina el unico nodo q ahy!! 
    return unicoNodo.value; // [] retorna unico nodo!!
  }

  var nodoActual = this.head.next; // [2] ---->[4]---->[5] nodo actual = [4]
  var nodoPrevious = this.head;// [2] el head tiene el valor de [4] 
  while (nodoActual.next !== null) { // pregunta si ahi un nodo siguente nodo actual.next [5]
    nodoPrevious = nodoActual;// nodo previous pasa a ser el nodo actual [4]!!!
    nodoActual = nodoActual.next;// avanza // nodo actual pasa a ser [5]
  }
  nodoPrevious.next = null;// desconecta el ultimo nood[5]
  return nodoActual.value;// devuelve [5 el nodo desconectado]
}

LinkedList.prototype.search = function(arg) {
  var nodoActual = this.head; /// // [2] ---->[4]---->[5] nodo actual = [2]

  if(nodoActual === null){/// si el unico nodo es igual a null nos retorna null
    return null;
  }

  while (nodoActual !== null) {/// mirntras alla null
    if(typeof arg === "function"){ // si el alrgumento es una function?
      if(arg(nodoActual.value)){// trabaja como un callbackvolvemos a preguntar si ahi un nodo actual . valor[2]
        return nodoActual.value;///// retorna [2]
      }
    } else if(nodoActual.value === arg){/// entra si el de ariba no se cumple si el valor del nodo actual es igual al arg
        return nodoActual.value; ///retorna si es igual s u valor[arg]
    }
    nodoActual = nodoActual.next;//  [2] ---->[4]---->[5] nodo actual = [2]
  }

  return null;
}

function Node(valor){
  this.value = valor;
  this.next = null;
}

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {

  if(value < this.value){
    if(this.left === null){
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null){
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.size = function() {/// recorremos pre "order"  root izq derecha.... y devuelve la cantidad de nodos
  if(this.value === null){
    return 0;
  }

  if(this.left === null && this.right === null){//// nodo root contamos 1
    return 1;
  }

  if(this.left === null){
    return 1 + this.right.size();/// root + derecha
  }

  if(this.right === null){
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
}


module.exports = {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
};