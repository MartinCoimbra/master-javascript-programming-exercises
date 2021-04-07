// Write your function here
function isOddLength(palabranum){
    if (palabranum.length % 2 === 1) {
        return true;
    }else{
        return false;
    }
};
var output = isOddLength('special');
console.log(output); // --> verdadero