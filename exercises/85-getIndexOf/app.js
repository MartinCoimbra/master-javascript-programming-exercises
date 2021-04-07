// Write your function here

function getIndexOf(letterA,index){

    for(var i=0; i<=letterA.length; i++){
        if(letterA[i] == index){
            return i;
        } 
    } 
return -1;
};

var output = getIndexOf('a', 'I am a hacker');
console.log(output);