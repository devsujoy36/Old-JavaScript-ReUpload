function multiply(a, b ) {
    a = 55;
    const result = a * b;
    return result;
}

let num1 = 5;
let num2 = 6;

const output = multiply(num1, num2);
console.log(output);



//object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'borsha'}
let student2 = {name: 'raj', partner: 'anika'}
 function makeMovie(couple1, couple2) {
    couple1.name = 'ononto';
    couple2.name = 'raju'
 }
 console.log(student1,student2);
 makeMovie(student1,student2)
 console.log(student1,student2);












 