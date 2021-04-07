// Write your function here
function getAllElementsButNth(arrayR,num){
  var newarray = [];
  newarray = arrayR.splice(0,2)
  return newarray
};
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']