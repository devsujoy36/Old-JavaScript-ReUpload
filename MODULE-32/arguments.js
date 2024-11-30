// arguments is a array like object

function sum(a, b, c) {
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(3,4,6,55,44,33,34);
console.log(total);

