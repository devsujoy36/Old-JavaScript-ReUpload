// total diposit 5000tk, ekta apple er dam 25tk, ekta orange er dam 22tk,ekta tormujer dam 800tk, 
// ekhon bajare giye 50ta apple, 70ta orange, 2ta tormuj ante hobe. 
// ekhon per item total cost & total shoping cost & current balance ber koro; 

var diposit = 5000;
var apple = 25;
var orange = 22.54;
var tormuj = 800;

var totalAppleCost = apple * 50;
var totalOrangeCost = orange * 70;
var totalTormujCost = tormuj * 2;
var totalShopingCost = totalAppleCost + totalOrangeCost + totalTormujCost;
var currentBanance = diposit - totalShopingCost;
currentBanance = currentBanance.toFixed(2);
currentBanance = parseFloat(currentBanance);

console.log("Total Apple Cost is = ", totalAppleCost);
console.log("Total Orange Cost is = ", totalOrangeCost);
console.log("Total Tormuj Cost is = ", totalTormujCost);
console.log("Total Shoping Cost is = ", totalShopingCost);
console.log("Your Current Balance is = ", currentBanance);


