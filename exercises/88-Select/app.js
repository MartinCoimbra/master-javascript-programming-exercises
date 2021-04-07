// Write your function here
function select(arrR,objJ){
 var result = {};
    arrR.forEach(function (i) {
        if (i in objJ) {
            result[i] = obj[i];
        }
    });
    return result;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }