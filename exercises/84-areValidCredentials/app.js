// Write your function here
function areValidCredentials(user, pass){
    if(user.length > 3 && pass.length >= 8){
        return true;
    }else{
        return false;
    }
};
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero

/* Dado un nombre y una contraseña, "areValidCredentials" retorna verdadero si el nombre tiene más de 3 caracteres Y, la contraseña tiene por lo menos 8 caracteres. De lo contrario retorna falso. */