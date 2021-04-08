/* NOTAS 
      Dado un objeto y una key, "getElementsLessThan100AtProperty" retorna un array que contiene 
      todos los elementos del array ubicado en esa key que sean menores a 100.

      -Si el array está vacío, debería retornar un array vacío.
      -Si el array no contiene ningún elemento menor a 100, debería retornar una array vacío.
      -Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
      -Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
 */
// Write your function here
function getElementsLessThan100AtProperty(objJ, keyy){
  var poss = 0;
    var newarry = [];
    var vacio = false;
    for(var i = 0; i < objJ.key.length; i++){
        if (objJ.key[i] < 100) {
          poss++;
          vacio = false;
          for(var j = 0; j < poss; j++){
            newarry[j] = objJ.key[i];
          }
        }else{
          vacio = true
        }
    }
    if(vacio === true){
      return newarry;  
    }


}
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
