//reverse string
var prompt = require('prompt-sync')();
var string= prompt("please enter a string : ");
var strLen = string.length;
var revStr='';
for(var i =strLen-1; i>=0; i--){
    
    revStr += string[i];
}
console.log(`${string} reverse is ${revStr}`);