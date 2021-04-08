// Write your function here
function getNthElementOfProperty(objJ,key,num){

    return objJ.key[num];

}
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2