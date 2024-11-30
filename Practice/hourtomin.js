function hourToMin(hour){
    let min1 = 60;
    let minute = hour * min1;
    console.log(hour, 'Hour = ', minute,'Minute.');
    return minute;
}
function minToSec(minute){
    let sec1 = 60;
    let second = minute * sec1;
    console.log(minute,'Minute = ',second,'Second');
}
const Hour = 24;
const HTM = hourToMin(Hour);
const MTS = minToSec(HTM);