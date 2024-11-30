// forword factorial 
function factorial(numbers){
    let mul = 1;
    for(let i = 1; i <= numbers; i++){
        mul = mul * i;
    }
    return mul;
}
const mul = factorial(15);
console.log('First factorial of 15 is:' ,mul);


//reverse factorial for loop
function factorial1(number){
    let fact = 1;
    for(let i = number; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}
const number = 10;
const Factnumber = factorial1(number);
console.log('Second factorial of 10 is: ',Factnumber);

//factorial with while loop 

function  factwhile(number){
    let i = 1;
    let fact = 1;
    while(i <= 7){
        fact = fact * i;
        i++;
    }
    return fact;
}
const number1 = 9;
const Factnumber1 = factorial1(number1);
console.log('while  factorial of 9 is: ', Factnumber1);
