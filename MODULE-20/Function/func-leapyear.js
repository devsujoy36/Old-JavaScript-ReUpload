function leapyear(year){
    if(year%4==0 && year%100!=0 || year%100==0){
        return 'Leap Year';
    }
    else{
        return 'Non Leap Year';
    }
}
const yourYear = 2205;
const Year = leapyear(yourYear);
console.log(Year);


