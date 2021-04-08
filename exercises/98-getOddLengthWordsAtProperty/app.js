// Write your function here
/* palabre.length % 2 == 1 */
function getOddLengthWordsAtProperty(objJ,key){
  var newArray = [],
        cant = 0,
        j = 0; /* lo colocamos aqui para que el for padre no la inicie a 0 a cada rato. */
    for(var i = 0; i < objJ.key.length; i++){
      if(objJ.key[i].length  % 2 === 1){
        cant++;
        for(;j < cant ; j++){
          newArray[j] = objJ.key[i];
        }
      }
    }
    return newArray
};
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']