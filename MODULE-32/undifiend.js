/**
 * 1. variable that is not initialize will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has not the right side will return undefined
 * 5. property that doesnot exist on an object will give you undefines
 * 6. accessing array elements outside of the index range 
 * 7. deleting an element inside an array 
 * 8. set a value directly to undefined 
 */



let first;
console.log(first);

function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2,5);



function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
console.log(total);


const fifth = {id: 3, name: 'ponchom', age: 30}
console.log(fifth.age, fifth.salary);


const sixth = [4,5,66,75,56];
delete sixth[1];
console.log(sixth[1], sixth[4], sixth[66]);
console.log(sixth);


const eigth = undefined;

const nine = null;

const data = {result: [], updated : null}
console.log(typeof null);






