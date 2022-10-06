const { queue } = require('@11ty/eleventy-cache-assets');
const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    var suma = 0;
    for (let i = 0; i < array.length; i++) {// i = 1
        if(Array.isArray(array[i])){
            suma+=countArray(array[i]) //rrecursion suma = suma + countArray(array[i])
        }else{
            suma+= array[i]
        }
}   
return suma;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) { /////contador de propiedades q hay en un objeto incluyendo objetos anidados
    // Tu código aca:
var counter = 0;
for (const propiedad in obj) {
        counter++;
        if(typeof obj[propiedad] === "object"){   /// preg si es un objeto
            if(!Array.isArray(obj[propiedad])){  /// y si no es un array
                counter +=countProps(obj[propiedad]);/// si es obj y no array suma uno y hace recursividad para seguir busando propiedades  dentro del objeto principal
        }
    }
}
return counter; // devuelve la cantidad de propiedades dentro de un objeto incluyendo objetos anidados
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    var counter = 0;

    var current = this.head;
    while(current){
        if(isNaN(current.value)){
            current.value = "Kiricocho";
            counter++;
        }
        current = current.next;
    }
    return counter;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newArray   = new Queue();

    while(queueOne.size() || queueTwo.size()){ //// mienteras ahiga elementos en los 2 queue
        var primero = queueOne.dequeue(); // tomamos los 2 primeros valores de ambas queue
        var segundo = queueTwo.dequeue();
        if(primero) newArray.enqueue(primero);/// si ahi un valor almacenado en la variable lo pushea a la nuva cola!!!
        if(segundo) newArray.enqueue(segundo);///lo mismo de arriva =)
    }
    return newArray;/// devuelve la nueva queue;
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {/// usamos un clousure una funcion  q retorna una funcion!!!
    // Tu código aca
    return function(num){         ////clousure nos permite usar una variable del contexto anterior
        return multiplier * num;  /// devuelve la multiplicacion
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
// if(!this.left && !this.right) return this.value;
// if(!this.left && this.right) return this.value + this.left.sum();
// if(this.left && !this.right) return this.value + this.right.sum();
// if(this.left && this.right) return this.value + this.left.sum() + this.right.sum();


var suma = 0
if(this.left){         /// pregunta si ahi algun arbol por la izq 
    suma+= this.left.sum(); /// si ahi lo suma y hace recursividad lo devuele al principio de la funcion
}
if(this.right){
    suma+= this.right.sum();/// hace lo mismo de arriba pero por la derecha
}
return suma + this.value //// devuelve la suma1!!!
}



module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}