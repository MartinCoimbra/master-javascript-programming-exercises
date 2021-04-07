// Write your function here
function computeAverageLengthOfWords(palabra1,palabra2){
    var total = (palabra1.length + palabra2.length) / 2;
    return total; 
};
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6