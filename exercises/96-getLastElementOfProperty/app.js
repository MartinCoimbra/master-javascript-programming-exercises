// Write your function here
function getLastElementOfProperty(objJ,key){
    return objJ.key[objJ.key.length - 1]
}
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5