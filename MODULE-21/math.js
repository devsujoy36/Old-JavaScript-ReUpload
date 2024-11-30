const result = Math.pow(3,8);
console.log('Result is: ',result);

const num1 = 25;
const num2 = 55;
const gap = Math.abs(num1 - num2);
if(gap<5){
    console.log('Your both become friends')
}
else{
    console.log('tai naki')
}
console.log('gap is',gap);

const result1 = Math.round(88.556);
console.log('rounded is use to make integer number:',result1);

const result2 = Math.ceil(22.556);
console.log('use cell in number:',result2);

const result3 = Math.floor(456.556);
console.log('use floor in number:',result3);




for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random()*6);
    console.log(random);
    
}


