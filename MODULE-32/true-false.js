/**
 truthy:
 1. true
 2. any number (+ve, -ve) will be truthy other than 0
 3. any string other than empty string 
 4. '0' 'false'
 5. {}
 6. []
 */

/**
 falsy:
 1. false 
 2. 0 
 3. '' (empty string)
 4. undefined
 5. null
 */

const x = true;
if (x) {
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}



// optional
// cheak falsy
const y = null;
if (!y) {
    console.log('value is falsy');
} 
else {
    console.log('value is truthy');
}

const z = {class: 9};
if(!!z){
    console.log('value is truthy');
}



