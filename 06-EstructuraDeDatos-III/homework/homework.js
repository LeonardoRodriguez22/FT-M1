"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value){
  if(value > this.value){
    if(this.right == null){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
  if(value < this.value){
    if(this.left == null){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }
}
BinarySearchTree.prototype.size = function (value){
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();

}


BinarySearchTree.prototype.contains = function (value){
  if(this.value === value) return true;
  if(value > this.value){
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
  if(value < this.value){
    if(this.left === null) return false;
    else return this.left.contains(value);
  }
}

var POST_ORDER = "post-order";

var PRE_ORDER = "pre-order";

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
  if(order === POST_ORDER){
    if(this.left)this.left.depthFirstForEach(cb, order)
    if(this.right)this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }else if(order === PRE_ORDER){
    cb(this.value)
    if(this.left)this.left.depthFirstForEach(cb, order)
    if(this.right)this.right.depthFirstForEach(cb, order)
  }else{
    if(this.left)this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right)this.right.depthFirstForEach(cb, order)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array){
  array = array || [];
  
  if(this.left){
    array.push(this.left)
  }
  
  if(this.right){
    array.push(this.right)
  }
  cb(this.value);
  if(array.length){
    var arbolito = array.shift()
    arbolito.breadthFirstForEach(cb, array)
  }
  }







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
