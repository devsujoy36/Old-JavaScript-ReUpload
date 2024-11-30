/**
 * chain
 * map
 * forEach
 * filter
 * find
 * reduce
 */


const data = [
    {id: 1, name: 'Sujoy', address: 'Jamlapur'} ,
    {id: 2, name: 'Price', address: 'Vola'} ,
    {id: 3, name: 'Rifat', address: 'Trisal'} ,
    {id: 4, name: 'Shorif', address: 'Gajipur'} ,
]
console.log(data[1].name, data[1].address);


const product = {
    count: 5000,
    data: [
        {id: 1, name: 'HP', price: 59999},
        {id: 1, name: 'macbook', price: 77779},
        {id: 1, name: 'appleMac', price: 88889},
    ]
}

const seconditeam = product.data[1].price;
console.log(seconditeam);

const user = {
    id: 5544,
    name: 'Sujoy Das',
    address: {
        street: {
            first: '534/33 uttora side',
            second: '54/33 dokkhin side',
            third: '53/433 posschim side'
        }
    }
}
const user2 = {
    id: 5534,
    name: 'Enamul Hoque',
    address: {
        city: 'Mymensingh',
        country:'Bangladesh'
    }
}
console.log(user.address.street.second);
//eke chain bole
console.log(user2.address.street?.second);  
//ekhane street er por '?' dewyar fole error asbe na 
//eke optional chain bole



