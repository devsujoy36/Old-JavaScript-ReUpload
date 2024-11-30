//Practice Problem 1
const oddArray = [1,3,5,7,9];
const evenArray = oddArray.map(evenArr => evenArr + 1);
console.log(evenArray);


//Practice Problem 2
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divTenNum = numbers.filter(num => num % 10 === 0);
console.log(divTenNum);


//Practice Problem 3
const divTenNumfind = numbers.find(num => num % 10 === 0);
console.log(divTenNumfind);


//Practice Problem 4
const instructor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akhi', age:26, position:'Junior'},
    {name:'Shobuj', age:30, position:'Senior'},
]
const senior = instructor.filter(instructor => instructor.position === 'Senior');
console.log(senior);


//Practice Problem 5
const people = [
    { name: 'Nodi', age: 28,},
    { name: 'Akhi', age: 26,},
    { name: 'Shobuj', age: 30,},
]
const age = people.map(people => people.age);
console.log(age);
const sumOfAge = age.reduce((a, b) => a + b, 0);
console.log(sumOfAge);

