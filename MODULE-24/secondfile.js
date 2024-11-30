console.log('second file');

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1 class="fourth-title">Section-Title-4</h1>
            <ul>
                <li>List-Item-1</li>
                <li>List-Item-2</li>
                <li>List-Item-3</li>
                <li>List-Item-4</li>
            </ul>
`;
main.appendChild(section);