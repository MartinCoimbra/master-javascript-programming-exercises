// Write your function here
function countAllCharacters(palabra){
    var objPalabra = {
        a: 0,
        b: 0,
        n: 0
    };
    var palabraA = 0,
        palabraB = 0,
        palabraN = 0;

    palabra = palabra.split(''); /* separa palabra en array */
    for(var i = 0; i < palabra.length; i++){
       if (palabra[i] === "b"){
         palabraB++;
       }else if(palabra[i] === "a"){
         palabraA++;
       }else if(palabra[i] === "n"){
         palabraN++;
       };
    }
    objPalabra.b = palabraB;
    objPalabra.a = palabraA;
    objPalabra.n = palabraN;
    
    return objPalabra
};

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}