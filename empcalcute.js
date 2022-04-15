//calculating empwage 
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
let empHrs=0; //4
empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_PART_TIME:
    empHrs=PART_TIME_HOURS;
    break;
    case FULL_TIME_HOURS:
        empHrs=FULL_TIME_HOURS;
        break;
        default:
            empHrs=0; //4
}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("empWage:"+empWage);