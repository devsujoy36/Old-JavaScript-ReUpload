const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // console.log(li.innerText);
}
const allHeading = document.getElementsByTagName('h1');
for (const h1 of allHeading) {
    // console.log(h1.innerText);
}

const title = document.getElementById('fruits-title');
title.innerText = 'Fruits changed by JS';

const places = document.getElementsByClassName('importent-places');
for (const place of places) {
    // console.log(place.innerText);
}


const someLi = document.querySelectorAll('.fruits-container li');
for (const li of someLi) {
    // console.log(li.innerText);

}
const titile = document.getElementById('hang');
const getAttribute = titile.getAttribute('class');
console.log('GetAtribute holo:', getAttribute);

const ClassList = titile.classList;
console.log('Frist ClassList', ClassList);
console.log(titile.classList.add('purple.bg'));
console.log('Current ClassList', ClassList);


// const setAttribute = document.getElementById('fruits-title');
// const a = setAttribute.setAttribute(setAttribute, 'Tooltip set by JavaScript');
// console.log('setattribute',a);

const b = document.getElementsByClassName('fruits-container')[0].innerHTML;
console.log('InnerHTML', b);