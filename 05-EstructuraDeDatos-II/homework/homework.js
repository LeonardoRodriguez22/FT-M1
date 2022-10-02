"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  searnción que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.ch(isEven), donde isEven es una fu
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  
  constructor() {
    this.head = null;
    this.length = 0;                  ///acumula el largo de la lista
                                      //representa el primer elemento de la lista q seria el primer NODO!!!
  }
  add(dato) {
    let node = new Node(dato);        //// creo el nuevo NODO  value:data, next: null!!!
    let courrent = this.head;     /// veo q ahi en  el primer NODO si ahi o no uno creado!!!
    if(!courrent) {                  //// si esta vacio lo creo como HEAD!!! osea el primer NODO!!!
      this.head = node;
    }else{
    while(courrent.next) {              /// mientras exista un NEXT (osea un NODO siguiente)segui..!!!
      courrent = courrent.next;            //// courrent pasa a ser el NODO  siguiente hasta q el NODO de turno tenga un NEXT = NULL!!
    }
    courrent.next = node;                 /// cuando el NEXT del NODO pasa a ser NULL se enlaza el nuevo NODO!!! 
    
    }
    this.length++;
  }

  remove(){
    if(this.head === null) return null;    
      
    else if(this.head && !this.head.next){   
      let ultimoElemento = this.head.value;
      this.head = null;
      return ultimoElemento;
    }
    let courrent = this.head
    while(courrent.next) {             
      courrent = courrent.next;        
    }
    let nodoEliminado = this.head.next.value;
    this.head.next = null;
    return nodoEliminado  
   
  }
  // search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  // Ejemplo: 
  // search(3) busca un nodo cuyo valor sea 3;
  // search(función) que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.ch(isEven), donde isEven es una fu
  // En caso de que la búsqueda no arroje resultados, search debe retornar null.
  search(arg){
    if(!this.head)return null;

    var busqueda;
    if(typeof arg != "function"){
      busqueda = function(data){
        return data === arg;
      }
    }else{
      busqueda = arg;
    }
  
  var courrent = this.head;
  while(courrent){
        
        if(busqueda(courrent.value)){
          return courrent.value;
        }else{
          courrent = courrent.next;
        }
  }
  return null
  
  }
}
    // 
    // if (courrent.value === null){
    //   return null;
    // }else{
    //   
    //     }
    //   }
    //   }
    
  


class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
    
  }
}





  /*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key){
  var sum = 0;
  for (let i = 0; i  < key.length; i++) {
     sum = sum +  key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}


HashTable.prototype.set = function(key, value){
  if(typeof key !== `string`) throw TypeError (`Keys must be strings`);
  var pos = this.hash(key);
  this.buckets[pos] = this.buckets[pos] || [];
  this.buckets[pos].unshift({key: key, value: value});

}

HashTable.prototype.get = function(key){
  var pos = this.hash(key);
  var subArray = this.buckets[pos]
  for (let i = 0; i < subArray.length; i++) {
    if(subArray[i].key === key){
      return subArray[i].value;
    } 
  }
  return false;
}

HashTable.prototype.hasKey = function(key){
  if(this.get(key))return true;
  else return false;
  // let i= this.hash(key);
  // return this.buckets[i].hasOwnProperty(key);
}







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
