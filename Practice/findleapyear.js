function findLeapYear(years){
    const leapyear = [];
    for(let i=0; i<years.length; i++){
        const index = i;
        const element = years[index];
        if(element%4==0 && element%100!=0 || element%400==0){
            console.log(element);
            leapyear.push(element);
        }
    }
    return leapyear;
}
const years = [2023, 2024, 2025, 2028, 2029, 2032];
const leapyear = findLeapYear(years);
console.log(leapyear);