let num1 = prompt('please enter the first number');

let num2 = prompt('please enter the second number');


num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);

if(num1 > num2){
    console.log('biggest one is', num1);
}else{
    console.log('biggest one is ', num2);
}