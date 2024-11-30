const song = ' ami tomar didhay bachi. Tomar didhay pure chai. emon didha prithibite dhiskew diskew koira khai. ';
console.log('Full Sentence of song is: ', song);

const perword = song.split(' ');
const sentence = song.split('.');
const char = song.split('');
console.log('split of song Per word is: ', perword);
console.log('split of song sentence is: ', sentence);
console.log('split of song alphabate is: ', char);


const partial = song.slice(5,10);
console.log('slice value is:',partial);

const partial2 = song.substring(5,10);
console.log('substring value is:', partial2);

const trim = song.trim();
console.log(trim);

const trimStart = song.trimStart();
console.log(trimStart);

const trimEnd = song.trimEnd();
console.log(trimEnd);


//join 
const lines = ['Sujoy', 'Amahs','Ahibas','Aifsa'];
const Names = lines.join(': ');
console.log(Names);


