const products = [
    { id: 1, name: 'lenovo', price: 55455 },
    { id: 2, name: 'dell', price: 46586 },
    { id: 3, name: 'HP', price: 45454 },
    { id: 4, name: 'Mac', price: 95555 },
]

//map
const name = products.map(product => product.name);
console.log(name);

//filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);

//find
const affortable = products.find(p => p.price < 50000);
console.log(affortable);

const total = products.reduce((acum, current) => acum + current.price , 0);
console.log(total);


