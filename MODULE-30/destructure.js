const actor = {
    name: 'Sujoy Das',
    age: 20,
    phone: '01303436299',
    money: 11000
}

// const name1 = actor.name;
// const phone = actor.phone;
// const age = actor.age;
// console.log(name1);


//distructuring in object
// use property name as a variable that contains the property
const {phone, age: boyos} = actor
console.log(phone);
console.log(boyos);


//array destructuring
const numbergula = [44,45]
const [first, second] = numbergula;
const [x,y] = [34,35]


//advance distructure
function doubleThem(a,b) {
    return [a*2 , b*2];
}
const [a,b] = doubleThem(4,5);
console.log(a,b);

