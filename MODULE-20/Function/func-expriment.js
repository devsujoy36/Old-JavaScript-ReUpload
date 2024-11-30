function GetSumOfArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        console.log(i, element);
        sum += element;
    }
    console.log('Total sum of Array is: ', sum);
    return sum;
}

function SumOfArray(ArrayName) {
    let sum = 0;
    for (let i = 0; i < ArrayName.length; i++) {
        const element = ArrayName[i];
        console.log(i, element);
        sum += element;
    }
    console.log('Summation of Total Array is: ', sum);
    return sum;
}

function SubOfArray(ArrayName) {
    let sub = 0;
    for (let i = 0; i < ArrayName.length; i++) {
        const element = ArrayName[i];
        console.log(i, element);
        sub -= element;
    }
    console.log('Substruction of Total Array is: ', sub);
    return sub;
}



const a = [52, 45, 26, 25, 71, 74, 95, 52, 64];
const b = [200, 2590];
const ab = [45, 56, 18, 45, 65, 47, 26, 51, 45, 77];

SumOfArray(a);
SubOfArray(b);
GetSumOfArray(ab);
