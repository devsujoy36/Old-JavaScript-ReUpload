function Largest(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element>largest){
            largest  = element;
        }
    }
    return largest;
}
function Lowest(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(lowest>element){
            lowest = element ;
        }
    }
    return lowest;
}

const heights = [167, 190, 120, 165, 137, 545];
const tallest = Lowest(heights);
console.log('Lowest persons length is: ',tallest);




function LargestNumber(numbers1){
    let largest1 = [0];
    for(let i = 0; i < numbers1.length; i++){
        const index = i;
        const element1 = numbers1[index];
        if(element1>largest1){
            largest1 = element1;
        }
    }
    return largest1;

}
const numbers1 = [65,45,68,48,48,46,45,41,56];
const findLargest = LargestNumber(numbers1);
console.log('the largest value is: ',findLargest);