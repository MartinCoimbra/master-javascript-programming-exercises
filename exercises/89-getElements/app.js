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
    if(vacio == true){
      return newarry;  
    }


}
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
