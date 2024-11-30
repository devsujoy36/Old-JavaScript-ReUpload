function GerSumOfArray(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element; 
        // console.log(index,element);
    }
    // console.log('Total sum of array is: ',sum);
    return sum;
}


function GetEvenNumOfArray(numbers){
    const evennumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(element % 2 === 0){
            console.log(index, element);
            evennumbers.push(element);
        }
    }
    return evennumbers;
}


function GetOddNumOfArray(numbers){
    const oddnumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}

const numbers = [45, 46, 65, 63, 22, 54, 66, 58, 99, 18, 85, 65];
// GerSumOfArray(numbers);

const evennumbers = GetEvenNumOfArray(numbers);
console.log(evennumbers);


const oddnumbers = GetOddNumOfArray(numbers);
console.log(oddnumbers);


