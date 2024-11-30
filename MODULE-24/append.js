// kono kichu add korte varName.appendChild() use hoy 
// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added 
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li);


// 1. where to add
const mainContainer = document.getElementById('main-container');

// innerText use kore append rules
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani';
ul.appendChild(li3); 

mainContainer.appendChild(section);


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
        <ul>
            <li>Pant</li>
            <li>Panjabi</li>
            <li>Fotua</li>
            <li>jangu</li>
        </ul>
`;
mainContainer.appendChild(sectionDress);
