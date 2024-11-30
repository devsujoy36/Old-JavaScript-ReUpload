function forwordString(text){
    for(let i = 0; i < text.length; i++){
        const element = text[i];
        console.log(element);
    }

}
function rerverseString(text){
    let reverse = '';
    for(let i = text.length-1 ; i >= 0; i--){
        const element = text[i];
        reverse = reverse + element;
        console.log(element,reverse);
    }
    return reverse;

}

const myString = 'SUJOY';
rerverseString(myString);
forwordString(myString);
