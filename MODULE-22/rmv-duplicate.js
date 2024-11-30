const names = ['abul', 'babul','Sujoy','shawon','hanif','abul','kabul','babul'];

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(names) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);