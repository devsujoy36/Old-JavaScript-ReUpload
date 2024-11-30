//filter selects element based on a condition and returns an array with 

const numbers = [55, 43, 56, 76, 44, 54, 66 ,77, 88, 99, 33, 52];
const selected = numbers.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Team','Josna'];
const selected2 = friends.filter(frnd => frnd.length>4);
console.log(selected2);




