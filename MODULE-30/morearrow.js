const defference = (a , b) => a - b;
const multiply = (first, second, third) => first * second * third;

const getAge = person => person.age;
const student = {name: 'sujoy', age: 20}
const age = getAge(student)
console.log(age);


function getAnoThird(numbers) {
    return numbers[2];
}
const thirdNum = getAnoThird([33, 44, 55, 66]);
console.log('thirdNum is: ', thirdNum);

//single paramiter
const getThird = (numbers) => numbers[2];
const third = getThird([3,4,5,6,67]);
console.log('third is: ', third);

//no paramiter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function. if you want to get anything returned from this function, then you have to use the return keyword,

const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}



