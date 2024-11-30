//normal function
function add(a,b) {
    const result = a+b;
    return result;
}
const sum = add(5,33);
console.log(sum);

//normal short function
function add(a,b) {
    return a+b;
}
const sum1 = add(5,33);
console.log(sum1);

//function expression 
const add2 = function (a, b) {
    return a + b;
}

//arrow function
const add3  = (a,b) =>  a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multy = (num1, num2) => num1 * num2;


let sum3 = add3(4,5);
let sum4 = add4(4,5,7,8);
let sum5 = multy(4,5);
console.log(sum3);
console.log(sum4);
console.log(sum5);


