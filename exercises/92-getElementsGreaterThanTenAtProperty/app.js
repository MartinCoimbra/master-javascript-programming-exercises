// Write your function here
function getElementsGreaterThan10AtProperty(objJ,key){
    var arrayNew = [];
    var cantt = 0;
    for(var i = 0; i < objJ.key.length; i++){
        if (objJ.key[i] > 10) {
            cantt++;
            for(var j = 0; j < cantt; j++){
                arrayNew[j] = objJ.key[i];
            }
        }
    }
    return arrayNew
};

var obj = {
  key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]