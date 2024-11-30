var a = 20.5;
var b = 50;
var c = 14;

var d = (b*b)-(4*a*c);

if(d>0){
    var x1 = (((-b)+Math.sqrt(d))/(2*a));
    var x2 = (((-b)-Math.sqrt(d))/(2*a));
    x1 = x1.toFixed(2);
    x2 = x2.toFixed(2);
    console.log('x1 is: ', x1);
    console.log('x2 is: ', x2);
}
else if(d == 0){
    var x = ((-b)/(2*a));
    x = x.toFixed(2);
    console.log('x is: ', x);
}
else{
    console.log('Roots are imaginary')
}


// dighat somikoron

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



