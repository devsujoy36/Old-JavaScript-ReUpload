// Problem 1 : Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result;

const multiply = (a, b, c) => {
    const result = a * b * c;
    return result;
}

const a = parseFloat(prompt("Enter the value of a: "));
const b = parseFloat(prompt("Enter the value of b: "));
const c = parseFloat(prompt("Enter the value of c: "));

const mult = multiply(a, b, c);
console.log('a = ',a,'b = ', b,'c = ', c);
console.log(mult);