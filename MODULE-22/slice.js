//VarName.slice(startingindex, endindex)
// kono ekti array theke ekti ongso kete niya asa slice er kaj 
// tobe slice dara original array change hoy na 

const friend = [12, 35, 15, 15, 38, 16, 33, 66, 64, 18, 48, 55, 26];
console.log('Original array before slice:', friend);
const partial = friend.slice(2, 5);
console.log('Splie Part:', partial);
console.log('Current Array after slice:', friend);