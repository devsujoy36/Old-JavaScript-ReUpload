function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalCost = product.price * product.quantity;
        sum = sum + totalCost;
    }
    return sum;
}
function highestCostItem(products) {
    let highest = products[0];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price > highest.price) {
            highest = product;
        }
    }
    return highest;
}
function LowestCostItem(products) {
    let lowest = products[0];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price < lowest.price) {
            lowest = product;
        }
    }
    return lowest;
}




const shopingCart1 = [
    { name: 'Red-Shirt', price: 1200, quantity: 2 },
    { name: 'Red-Pant', price: 2200, quantity: 5 },
    { name: 'Red-Shoes', price: 3700, quantity: 4 },
    { name: 'Red-Belt', price: 696, quantity: 3 },
    { name: 'Red-lungi', price: 900, quantity: 3 },
    { name: 'Red-UnderPant', price: 400, quantity: 3 },
];
const shopingCart2 = [
    { name: 'Black-Shirt', price: 4200, quantity: 2 },
    { name: 'Black-Pant', price: 4200, quantity: 5 },
    { name: 'Black-Shoes', price: 4700, quantity: 4 },
    { name: 'Black-Belt', price: 496, quantity: 3 },
    { name: 'Black-lungi', price: 480, quantity: 3 },
    { name: 'Black-UnderPant', price: 480, quantity: 3 },
];
const shopingCart = shopingCart1.concat(shopingCart2);
console.log('My Full Shoping Cart is: ', shopingCart);

const expence = totalCost(shopingCart);
console.log('Todays total expence is: ', expence)
const HighestCostItem = highestCostItem(shopingCart);
console.log('Todays Highest cost item is: ', HighestCostItem)
const lowestCostItem = LowestCostItem(shopingCart);
console.log('Todays lowest cost item is: ', lowestCostItem)