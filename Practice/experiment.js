function kuchtogarbar(number){
    let randomvalue = [];
    for(let i = 0; i < number.length; i++){
        let random = Math.round(Math.random() * 500);
        console.log(random);
        randomvalue.push(random);
    }
    console.log(randomvalue);
    return randomvalue;
}
kuchtogarbar(number);
let a = [];
const random = Math.round(Math.random() * 500);
a.push(random);
a.join(random);
console.log(a);

