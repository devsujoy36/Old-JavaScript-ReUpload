//javascript object notation (json)

const user = {id: 1, name:'Sujoy Das', job:'Actor'};
const stringified = JSON.stringify(user)
/**
 console.log(user); 
 console.log(stringified);
 
 output
 { id: 1, name: 'Sujoy Das', job: 'Actor' }
 {"id":1,"name":"Sujoy Das","job":"Actor"}
 * 
 */


 const shop = {
    owner: 'Alia',
    address: {
        street: 'kochu khet voot er goli',
        city: 'kochu khet',
        country: 'bd'
    } ,
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenew:454555,
    isOpen: true,
    isNew: false,
 }

 console.log(shop);
 const shopJSON = JSON.stringify(shop);
 console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);


