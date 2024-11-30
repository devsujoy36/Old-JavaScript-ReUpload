//Creating new array using map callback function

//using for of loop to create new array
const numbers = [4,5,6,7];
const doubled = [];
for (const num of numbers) {
        const double = num * 2;
        doubled.push(double);
    }
    console.log(doubled);
    
    
//Normal Function
function doubleIt(num) {
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log('Normal Function',result);


//Arrow function
const double2 = num => num * 2
const output = numbers.map(double2);
console.log('Output by arrow function', output);


//one line arrow function
const output2 = numbers.map(num => num * 2);
console.log('Output2 by one line arrow function', output2)










