var prompt = require('prompt-sync')();
var number = prompt("please enter a number");
var fact=1;
if(number == 0){
    console.log(`the factorial of ${number} is 1`)
}else if(number < 0){
    console.log(`the factorial of -ive numbers is not possible`)

}else{
    for(var i=1; i<=number; i++){
        console.log(i);
        fact=fact*i;
         console.log(`the factorial of ${number} is ${fact}`);
    }
}