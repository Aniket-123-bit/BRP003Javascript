var prompt = require('prompt-sync')();
var enterValue = prompt("Please enter the string:");
var res = enterValue.slice(1,3);
console.log(res);
var result= enterValue.split("");
console.log(result);
