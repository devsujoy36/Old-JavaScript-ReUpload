function cheapestPhone(phones){
    let chepest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price<chepest.price) {
            chepest = phone;
        }
    }
    return chepest;
}
function highestPricePhone(phones){
    let Highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price>Highest.price) {
            Highest = phone;
        }
    }
    return Highest;
}



const phones = [
    {name:'Samsung', camera:108, price:90000, ram:8, rom:128, discount:1000},
    {name:'Realme', camera:108, price:25000, ram:8, rom:128, discount:1000},
    {name:'Oppo', camera:32, price:30000, ram:8, rom:128, discount:1000},
    {name:'Poco', camera:64, price:28000, ram:8, rom:128, discount:1000},
    {name:'Xiaumi', camera:64, price:20000, ram:8, rom:128, discount:1000},
    {name:'Vivo', camera:32, price:18000, ram:8, rom:128, discount:1000},
]
const mySelection = cheapestPhone(phones);
console.log('My Selection For Lowest Price',mySelection);

const mySelectionforHighest = highestPricePhone(phones);
console.log('My Selection For Highest Price', mySelectionforHighest);