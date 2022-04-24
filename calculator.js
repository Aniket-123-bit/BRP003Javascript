var prompt = require('prompt-sync')();
var num1 = prompt(" Enter the first number: ");
var num2 = prompt(" Enter the second number: ");
let opr = prompt("please select among +,-,*,/ ");
switch(opr){
    case "+":
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${res}`);
        break;
        case "-":
            var res = parseFloat(num1) - parseFloat(num2);
            console.log(`${num1} - ${num2} = ${res}`);
            break;
            case "*":
                var res = parseFloat(num1) * parseFloat(num2);
                console.log(`${num1} * ${num2} = ${res}`);
                break;
                case "/":
                    var res = parseFloat(num1) / parseFloat(num2);
                    console.log(`${num1} / ${num2} = ${res}`);
                    break;
                    default:
                        console.log('invalid operator');

}

