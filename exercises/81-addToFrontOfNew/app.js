function addToFrontOfNew(array, num){
    var newarry=[]    

    for(var i = 0; i < array.length; i++){
      newarry[i]=array[i]
    };

    newarry.unshift(num)
    return newarry
};

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2] 