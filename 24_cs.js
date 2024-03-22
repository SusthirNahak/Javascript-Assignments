//24.write a program to check if a number is 3 digit or not

function countNum(num){
    return String(num).length;
}
let num1=9099;
let result=countNum(num1);
result==3 ? console.log("3-digit number") : console.log("not a 3-digit number")

//another way
const startNum=100;
const endNum=999;
let num=785;
if (num>=startNum && num<=endNum){
    console.log("This is a 3-digit number");
}else{
    console.log("This is not a 3-digit number");
}