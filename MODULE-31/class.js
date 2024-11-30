const products = [
    { id: 1, name: 'lenovo', price: 55455 },
    { id: 2, name: 'dell', price: 46586 },
    { id: 3, name: 'HP', price: 45454 },
    { id: 4, name: 'Mac', price: 95555 },
]

// class has some properties, method, 
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
console.log(lenovo);
lenovo.speak('Oba kita kow')




class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const tapan = new Teacher('Tapan sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid sir', 'English');
console.log(rashid);

