//Write a program Factors of 24 using while loop (Factors of 24 are 1, ,3, 4, 6, 12, 24)
let num=20;
let factorial=1;
while(factorial<=num){
if(num%factorial===0){
    console.log(factorial);
}
factorial++;
}