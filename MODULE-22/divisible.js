// ekadhik sorto thakle if er moddhe sob sorto eksathe && diye likhe dite hobe tar por else if er moddhe prottekti sorto ke alada alada kore likhte hobe

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    } 
    else if (i % 3 === 0) {
        console.log('bar');
    }
    else if (i % 5 === 0) {
        console.log('Foo');
    }
    else {
        console.log(i);
        
    }
    
}