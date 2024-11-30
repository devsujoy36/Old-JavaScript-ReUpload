var a = 88;
var b = 87;
var c = 88.1;

if(a>b){
    if(a>c){
        console.log('Largest Number is a: ', a);
    }
    else{
        console.log('largest Number is c: ', c);
    }
}
else if (b>a){
    if(b>c){
        console.log('Largest Number is b: ',b);
    }
    else{
        console.log('Largest Number is c',c);
    }
}
else{
    console.log('Same values',a,b,c);
}

