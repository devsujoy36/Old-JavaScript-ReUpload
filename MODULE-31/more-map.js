const numbers = [55,43,56,76,33,52];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fivebonus = numbers.map(num => num + 5);
console.log(fivebonus);

const half = numbers.map(num => num / 2);
console.log(half);

const friends = ['Tom','John', 'Micheal', 'Oliver'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);



