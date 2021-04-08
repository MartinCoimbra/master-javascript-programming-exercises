// Write your function here
function getFirstElementOfProperty(objJ,key){    
    return objJ.key[0];
}
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1