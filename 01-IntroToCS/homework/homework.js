'use strict'


function BinarioADecimal(num) {
  
  var suma = 0
  /// declaro variable sum para almacenar el numero decimal
  for(var i = 0; i < num.length; i++){ 
  /// itero por cada numero del binario
  suma += Math.pow(2, num.length - (i+1) ) * num[i];
  /// suma += le agrego a sum cada resultado q se obtiene de elevar 2(base binaria)  
  /// por la posicion de cada numero en el binario pasado pero leyendo de derecha a izquierda. 
  /// el num.length - (1+i ) me devuelve la posicion del numero q esta iterando en el for q se 
  /// toma de derecha a izquierda...
  /// * num[i] ---> luego lo multiplico por el numero q esta en la posicion de i
  }
  return suma;
  /// retorno la suma de todos los resultados en decimal (base 10)
  }
  console.log(BinarioADecimal(0))

//   function binaryToDecimal(num) {q
//     return parseInt(num, 2);
//   }
//   let decimal = binaryToDecimal("1001");
// console.log(decimal);


function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  /// creamos el array para ir armando el binario

  while(num > 0){
    ///mientras el numero sea mayor a 0
    array.unshift(num % 2);
    ///le agrego al principio el modulo del numero (unshift agrega al principio) 
    num = Math.floor(num / 2);
    // redondeo para abajo el numero dividido para obtener el modulo

    

    
}

return array.join("");
// retorno el array joineado osea uno el arreglo...

}
console.log(DecimalABinario(9))
// function decimalToBinary(num) {
  
 
//   return num.toString(2);
//   }

  // console.log(decimalToBinary(13))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}



