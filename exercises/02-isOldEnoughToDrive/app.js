function isOldEnoughToDrive(age) {
  // your code here
   if(age >= 16){
        return true;
    }else{
        return false;
    };
};
var output = isOldEnoughToDrive(22);
console.log(output); // --> true