// Write your function here
function keep(arrayN,num){
 var newArray = [],
        cant = 0,
        j = 0; /* lo colocamos aqui para que el for padre no la inicie a 0 a cada rato. */
    for(var i = 0; i < arrayN.length; i++){
      if(arrayN[i] === num){
        cant++;
        for(;j < cant ; j++){
          newArray[j] = arrayN[i];
        }
      }
    }
    return newArray
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);// --> [2, 2]