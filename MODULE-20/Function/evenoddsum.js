// ফাংশন ব্যাবহার করে একটি অ্যারে থেকে জোড় বিজোড় সংখা আলাদা আলাদা বের করে যোগফল নির্ণয়। 

function getEven(num){
    const evenNumber = [];
    for(let i = 0; i<num.length; i++){
        const index = i;
        const element = num[index];
        if(element%2==0){
            evenNumber.push(element);
        }
    }
    return evenNumber;
}
function SumOfEven(even){
    let sum = 0;
    for(let i=0; i<even.length; i++){
        const element = even[i];
        sum = sum + element;
    }
    return sum; 
}


function getOdd(num) {
    const oddNumber = [];
    for (let i = 0; i < num.length; i++) {
        const index = i;
        const element = num[index];
        if (element % 2 == 1) {
            oddNumber.push(element);
        }
    }
    return oddNumber;
}
function SumOfOdd(odd) {
    let sum = 0;
    for (let i = 0; i < odd.length; i++) {
        const element = odd[i];
        sum = sum + element;
    }
    return sum;
}


const num = [51, 88, 57, 56, 54, 25, 36, 85, 77];
console.log('Your Entered values is: ', num);


const even = getEven(num);
const EvenSum = SumOfEven(even);
console.log('Your even values is: ', even);
console.log('The Sum of Even values is ',EvenSum);


const odd = getOdd(num);
const OddSum = SumOfOdd(odd);
console.log('Your Odd values is: ', odd);
console.log('The Sum of Odd values is ', OddSum);
