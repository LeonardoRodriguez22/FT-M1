'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // elegir el pivote
  // crear array izq y derecha
  //comparar pivote los valore mayores a la derecha menores a la izquierda
  // lega el momento de la recursion
  // quien es el pivot como dijimos el ultimo vuelve hacer el ultimo valor de cada array
  // vuelve a comparar
  //metodo para ordenar concat!!!
if(array.length <= 1)return array;
var pivot =array[Math.floor(Math.random()* array.length)];
var left = [];
var equals = [];
var right = [];
for (let i = 0; i < array.length; i++) {
  if(array[i] < pivot){
    left.push(array[i]);
  }else if(array[i] === pivot){
    equals.push(array[i])
  }else{
    right.push(array[i])
  }
}
return [].concat(quickSort(left).concat(equals).concat(quickSort(right)));
}





function merge(left, right) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
var izquierda = 0;
var derecha = 0;
var arrayMerge = [];
while(izquierda < left.length && derecha < right.length){
  if (left[izquierda] < right[derecha]){
    arrayMerge.push(left[izquierda]);
    izquierda++;
  }else{
    arrayMerge.push(right[derecha]);
    derecha++;
  }
}
return arrayMerge.concat(left.slice(izquierda)).concat(right.slice(derecha));

}

function mergeSort(array){
  if(array.length === 1)return array;
  var mitad = Math.floor(array.length / 2);
  var left = array.slice(0, mitad);
  var right = array.slice(mitad);
  return merge(mergeSort(left), mergeSort(right));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
