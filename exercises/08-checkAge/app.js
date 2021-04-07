function checkAge(name, age) {
  // your code here
var saludo;
if (age < 21) {
    saludo = "Go home, "+ name + "!";
}else if(age >= 21){
    saludo = "Welcome, "+ name +"!";
}
return saludo;
}
var output = checkAge('Adrian', 22);
console.log(output); // --> '¡BIenvenido Adrian!'