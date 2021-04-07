// Write your function here
function findMinLengthOfThreeWords(a,b,c){
    if (b.length > a.length && c.length > a.length) {
        return a.length
    }else if (a.length > b.length && c.length > b.length) {
        return b.length
    }else if (a.length > c.length && b.length > c.length) {
        return c.length
    }

}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1