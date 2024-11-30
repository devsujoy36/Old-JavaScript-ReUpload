function evenodd(number){
    if(number%2==0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
const number = 5555;
const myNumber = evenodd(number);
console.log('Your number', number,'is: ' ,myNumber);
