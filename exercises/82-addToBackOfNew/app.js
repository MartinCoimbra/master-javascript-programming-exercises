// Write your function here
function addToBackOfNew(arrayOriginal, num){
    var newarry=[];
     newarry = arrayOriginal.slice(0,2)
     newarry.push(num);
    return newarry

};
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]