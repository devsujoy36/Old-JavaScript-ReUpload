// Forword whileloop factorial 
function whileFactorial(num){
    let fact = 1;
    let i = 1;
    while(i <= num){
        fact = fact * i;
        i++;
    }
    return fact;
}
const num = 10;
const factorial = whileFactorial(num);
console.log('Forword whileloop Factorial of ',num,'is: ',factorial);


// reverse whileloop factorial 
function whileReverseFactorial(num1){
    let i = num1;
    let fact = 1;
    while(i >= 1){
        fact = fact * i;
        i--;
    }
    return fact;
}
const num1 = 9;
const factorial1 = whileReverseFactorial(num1);
console.log('Reverse whileloop Factorial of ', num1, 'is: ',factorial1);