// Write your function here
/* Tengo que sacar los elementos del primer parametro que coincidan con el  segundo 
teoria de conjunto...*/
function removeElement(arrayN,num){
    var newArray = [],
        cant = 0,
        j = 0; /* lo colocamos aqui para que el for padre no la inicie a 0 a cada rato. */
    for(var i = 0; i < arrayN.length; i++){
      if(arrayN[i] !== num){
        cant++;
        for(;j < cant ; j++){
          newArray[j] = arrayN[i];
        }
      }
    }
    return newArray
};

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]