var student = {
    Name : 'Sujoy Das',
    Roll : 672736,
    RegNo : 1502218235,
    Department : 'Computer',
    Semester : '5th',
    Shift : '2nd',
    Group : 'B',
}
console.log(student);

// variable er property gulor moddher kono value change korar jonno 
student.Name = 'Akash Day';
console.log(student);

// object theke sudhu keys ba property gulo print korar jonno
var property = Object.keys(student);
console.log('Property: ', property);

// object theke sudhu keysValues ba propertyValues gulo print korar jonno
var propertyValues = Object.values(student);
console.log('Property Values: ', propertyValues);

//Rules 1 object theke jekono property arekti variable e niye print korar jonno
var info = student.Name;
console.log(info);
 
//Rules 2 Object er property ke array moto [] curly braket dara ber kora jay
var info1 = student['Roll'];
console.log(info1);

// Rules 3 ebavew kora jay
var c = 'Shift';
var d = student[c];
console.log(d);