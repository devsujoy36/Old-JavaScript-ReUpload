function getAvarage(a, b, c, d, e, f, g, h) {
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
var myAvarage = getAvarage(a, b, c, d, e, f, g, h);
console.log('My Avarage mark is: ', myAvarage);