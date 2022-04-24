const { info } = require("console");

//obejct
console.log("welcome to object");
let objectData = {Name: "Aniket", Age: 30,100: "dubai", 400:60};
console.log("object data is:");
console.log(objectData);
console.log(objectData["Name"]);
console.log(objectData.Age);

//Array
console.log("welcome to Array code");
let arrayData = [22,33,44,55,"Aniket","Imran","magha",111.12]
let array = arrayData.shift();
console.log("shift" +array);
console.log(arrayData);

//push method
arrayData.push("Anny",12);
console.log(arrayData);
//pop

let removeData=arrayData.pop();
console.log(arrayData);
console.log(removeData);

//filter
let number =[1,2,3,4,5,6,,7,8,9,10];
function checkEven(number){
    if(number%2 == 0)
    return true;
    else
    return false;
}
//filter
let numberEven = number.filter(checkEven);
console.log(numberEven);

//concat is means new arrays merging two or more value/arrays
let a =[1,2,3,4,5];
let b =[6,7,8,9,10];
let merge = a.concat(b);
console.log(merge);

//find() method
const team = [
    {name:"Aniket",age:22},
{name:"Anny",age:23},
{name:"Sneha",age:18},
{name:"Anamika",age:8},

];
function adults(member){
    return member.age >=18;
}
console.log(team.find(adults));
//foreach
let arr1 = [1,3,5,7,9,11];
function squre(element){
    console.log(element*element);
}
arr1.forEach(squre);

//form method
let arr2 = Array.from("abc");
console.log(arr2);

//include method
let language = ["c","c++","java","python","js"];
let checks = language.includes("js");
console.log(checks);

 //key() methods
 const lan = ["c","java","javascript","sql"];
 let iterator = lan.keys();
 for (let key of iterator) {
    console.log(key);
  }
  

 