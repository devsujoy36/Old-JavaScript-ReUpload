function reverseWord(str) {
    const word = str.split(' ');
    const result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const str = 'hi plz help me';
const varu = reverseWord(str);
console.log(varu);
