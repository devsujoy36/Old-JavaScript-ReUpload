// Object.keys()
// Object.values()
// Object.entries()
// Object.freeze() 
// Object.seal()



const glass = {
    name: 'glass',
    color: 'golden',
    price: 55,
    isCleaned: true
};


console.log(glass);
//all properties or key names
const keys = Object.keys(glass);
console.log(keys);

//all propertiesvalues of keys
const values = Object.values(glass);
console.log(values);



const entries = Object.entries(glass);
console.log(entries);

//array of array, two dimentional array
// [
//     ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 55],
//     ['isCleaned', true]
// ]

// delete object er property
delete glass.isCleaned;
console.log(glass);

// destructure object property
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);


// freeze 
Object.freeze(glass);
glass.sourse = 'Bangladesh';
glass.price = 4444;
delete glass.name;
console.log(glass);


// seal 
Object.seal(glass);
glass.sourse = 'Bangladesh';
glass.price = 4444;
delete glass.name;
console.log(glass);




