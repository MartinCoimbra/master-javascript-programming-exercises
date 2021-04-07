// Write your function here
function getElementsThatEqual10AtProperty(objJ,keyY){
    var Sveces = 0;
    var newarry = [];

    for(var i = 0; i < objJ.key.length; i++){
        if (objJ.key[i] === 10) {
          Sveces++;
          /* pa saber cuantos hay que agregar y cuales ya viene con la i */
          for(var j = 0; j < Sveces; j++){
            newarry[j] = objJ.key[i];
          }
        }
    }
    return newarry;
}
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]