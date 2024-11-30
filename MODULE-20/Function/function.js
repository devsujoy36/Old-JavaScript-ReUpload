function add(a, b) {
    var sum = a + b;
    return sum;
}
var num1 = add(555, 45);
var num2 = add(885, 545);
var sum = add(num1, num2);
console.log('Your first Number is: ', num1);
console.log('Your second Number is: ', num2);
console.log(num1, '+', num2, '=', sum);




function sub(a, b) {
    var sub = a - b;
    return sub;
}
var num1 = sub(555, 45);
var num2 = sub(885, 545);
var sub = sub(num1, num2);
console.log('Your first Number is: ', num1);
console.log('Your second Number is: ', num2);
console.log(num1, '-', num2, '=', sub);




function mul(a, b) {
    var mul = a * b;
    return mul;
}
var num1 = mul(555, 45);
var num2 = mul(885, 545);
var mul = mul(num1, num2);
console.log('Your first Number is: ', num1);
console.log('Your second Number is: ', num2);
console.log(num1, '*', num2, '=', mul);




function div(a, b) {
    var div = a * b;
    return div;
}
var num1 = div(555, 45);
var num2 = div(885, 545);
var div = div(num1, num2);
console.log('Your first Number is: ', num1);
console.log('Your second Number is: ', num2);
console.log(num1, '/', num2, '=', div);





function addTwoNum(a,b){
    var sum = a+b;
    console.log(a,'+',b,'=',sum);
}
addTwoNum(55,44);

function apple (amount){
    var applePrice = 12;
    var quantity = amount / applePrice;
    console.log('Your total Amount is: ',amount);
    return quantity;
}
var numberOfapple = apple(5000);
numberOfapple = parseInt(numberOfapple);
console.log('The Number Of Apple is: ', numberOfapple);


//CGPA grade using function
function getAvarage(a , b , c , d , e , f , g , h){
    const total = a + b + c + d + e + f + g + h;
    const avarage = total / 8;
    return avarage;
}
const a = 48;
const b = 89;
const c = 87;
const d = 85;
const e = 66;
const f = 88;
const g = 48;
const h = 84;
var myAvarage = getAvarage(a , b , c , d , e , f , g , h);
console.log('My mark is: ', myAvarage);















