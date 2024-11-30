// while (condition) {}
// for (let i = 0; i < numbers.length; i++) {}
// for (const num of numbers) {}
// for (const num in numbers) {}

// for of use on array or string not in object
// for in use on object 



// for of direct string e use kora jay
const nobab = 'Nobab Siraj Doula';
for (const char of nobab) {
    console.log(char);
}

// for of direct array te use kora jay
const numbers = [2,3,4,5];
for (const num of numbers) {
    console.log(num);
}

// for in direct object e use kora jay
const glass = {name:'glass', color:'golden', price:55, isCleaned:true};
for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}

// for of direct Object e use kora jay na, tobe ektu ghuriye kora jay
const keys = Object.keys(glass);
for (const key of keys) {
    const value = glass[key];
    console.log(key, value);
}

