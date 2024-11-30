// Without Using Function
var A = 20.5;
var B = 50;
var C = 14;
var D = (B * B) - (4 * A * C);
if (D > 0) {
    var X1 = (((-B) + Math.sqrt(D)) / (2 * A));
    var X2 = (((-B) - Math.sqrt(D)) / (2 * A));
    X1 = X1.toFixed(2);
    X2 = X2.toFixed(2);
    console.log('X1 is: ', X1);
    console.log('X2 is: ', X2);
}
else if (D == 0) {
    var X = ((-B) / (2 * A));
    X = X.toFixed(2);
    console.log('x is: ', X);
}
else {
    console.log('Roots are imaginary')
}
// With Function
function quardratic(a, b, c) {
    var d = (b * b) - (4 * a * c);
    if (d > 0) {
        var x1 = (((-b) + Math.sqrt(d)) / (2 * a));
        var x2 = (((-b) - Math.sqrt(d)) / (2 * a));
        x1 = x1.toFixed(2);
        x2 = x2.toFixed(2);
        console.log('x1 is: ', x1);
        console.log('x2 is: ', x2);
    }
    else if (d == 0) {
        var x = ((-b) / (2 * a));
        x = x.toFixed(2);
        console.log('x is: ', x);
    }
    else {
        console.log('Roots are imaginary')
    }
}
var a = 20.5;
var b = 50;
var c = 14;
quardratic(a, b, c);







