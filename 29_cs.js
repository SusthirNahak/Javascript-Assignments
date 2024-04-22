//29. Write a program to print the least number in given three numbers?
let num1=1;
let num2=5;
let num3=3;

if(num1<=num2 && num1<=num3){
    console.log(`${num1} is least among all 3 numbers`);
}
else if(num2<=num1 && num2<= num3){
    console.log(`${num2} is least among all 3 numbers`);
}else{
    console.log(`${num3} is greatest among all 3 numbers`);
}