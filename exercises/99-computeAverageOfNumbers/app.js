// Write your function here
function computeAverageOfNumbers(arrayY){
  var sumTotal = 0,
      promedio = 0;
  for(var i = 0; i < arrayY.length; i++){
    sumTotal = sumTotal + arrayY[i]
  }
  promedio = sumTotal / arrayY.length;

  return promedio
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3