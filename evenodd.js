var prompt = require('prompt-sync')();
let x = prompt("Enter the x vaule :");
let res=x%2 == 0 ? "even" : "odd";
console.log(`${x} is an ${res} number`);

