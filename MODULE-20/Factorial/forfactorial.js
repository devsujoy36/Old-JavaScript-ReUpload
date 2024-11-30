// forword factorial 
function ForFactorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}
const num = 10;
const factorial = ForFactorial(num);
console.log('Forword Forloop Factorial of ',num,'is: ',factorial);


//reverse factorial for loop
function factorial1(num1) {
    let fact = 1;
    for (let i = num1; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
const num1 = 9;
const Factnumber = factorial1(num1);
console.log('Reverse Forloop factorial of 9 ', num, 'is: ', Factnumber);