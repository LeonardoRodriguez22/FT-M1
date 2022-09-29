'use strict'


function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0
  
  for(var i = 0; i < num.length; i++){
    suma += Math.pow(2, num.length-1-i ) * num[i];
  }
  return suma;
  }


function DecimalABinario(num) {
  // tu codigo aca
  var array = [];

  while(num > 0){
    array.unshift(num % 2);
    num = Math.floor(num / 2);
     //ahi tenria q aparecer

    
}

return array.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}