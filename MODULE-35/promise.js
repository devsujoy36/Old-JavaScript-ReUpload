const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if (num < 5) {
        resolve(4445);
        
    }
    else{
        reject('NO data available')
    }
    
})

getData
    .then(data => console.log(data + 55))
    .catch(err=> console.error('ERR',err))
