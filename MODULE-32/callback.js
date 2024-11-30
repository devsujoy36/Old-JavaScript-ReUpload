// const name = 'Sujoy Das'
// const numbers = [44,45,66,43,53,35];
// const laptop = {brand:'lenovo' , price: 76373};
// greeting(name)
// greeting(numbers)
// greeting(laptop)

function greeting(handler, name) {
    handler(name);
}

function greetingHandler(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetNight(name) {
    console.log('Good Night', name);
}




greeting(greetingHandler, 'sujoy')
greeting(greetEvening, 'sujoy')
greeting(greetNight, 'sujoy')