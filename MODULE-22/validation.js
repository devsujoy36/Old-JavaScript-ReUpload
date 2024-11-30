function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please Enter a Valid Numbers'
    }
    else{
        return num1 + num2;
    }
}
const sum = add(55,'55');
console.log(sum);