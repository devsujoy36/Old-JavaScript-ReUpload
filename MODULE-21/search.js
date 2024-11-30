const song = 'Ami tomar didhay bachi, tomar didhay more jai';
const songlowerCase = song.toLowerCase();

const doesExist = songlowerCase.includes('ami');
const textIndex = songlowerCase.indexOf('tomar');
console.log('Include',doesExist);
console.log('Indexof',textIndex); 

const filename1 = 'Sujoy Das.png';
const filename2 = 'Ajay Roy.pdf';
console.log('Starts With',filename1.startsWith('bijoy'));
console.log('End With',filename2.endsWith('.pdf'));
