// Option 2 [we will use sometimes]
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}

// Option 3
function makePurple() {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
}
const purpleButton = document.getElementById('clickmepurple');
purpleButton.onclick = makePurple;

// Option 3 another version  
const aquaButton = document.getElementById('bg-aqua');
aquaButton.onclick = function makeAqua() {
    document.body.style.backgroundColor = 'aqua'
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// option 4 another version
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'lightgreen'
});

//option 4 final use [we will use sometimes]
document.getElementById('make-goldenrod').addEventListener('click', function makeGolden() {
    document.body.style.backgroundColor = 'gold'
});