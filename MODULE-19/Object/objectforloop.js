var student = {
    Name: 'Sujoy Das',
    Roll: 672736,
    RegNo: 1502218235,
    Department: 'Computer',
    Semester: '5th',
    Shift: '2nd',
    Group: 'B',
}

const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = student[propertyName];
    console.log(propertyName,propertyValues);
}