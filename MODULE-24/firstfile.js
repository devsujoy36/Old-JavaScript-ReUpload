console.log('First file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const secondSection = document.getElementById('Second-section');
console.log(secondSection);
secondSection.style.color = 'white';
secondSection.style.padding = '20px';
secondSection.style.backgroundColor = 'steelblue';
secondSection.style.borderRadius = '15px';

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'my dynamic item';
secondList.appendChild(li);

