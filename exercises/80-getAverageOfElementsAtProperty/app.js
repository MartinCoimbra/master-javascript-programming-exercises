// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    var totalkey = 0,
        divi,
        total;
        divi = obj[key].length;
    if(divi === 0){
      return 0;
    }else{
      for(var i = 0; i < divi; i++){
       totalkey = totalkey + obj.key[i];
    };

    total = totalkey / obj.key.length;
    return total
    };
    
};

var obj = {
  key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2