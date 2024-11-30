const Name = 'Sujoy Das';
const age = 20;
const love = true;
const student = { id: 672736, regno: 1502218235 };
const friendAge = [20, 22, 21, 21, 22];
function add(num1, num2) {
   return num1 + num2;
}
console.log(typeof Name);  //string
console.log(typeof age);  // number
console.log(typeof love);  // boolean
console.log(typeof student);  // object 
console.log(typeof friendAge);  // object
console.log(typeof add);  // function
// but ekhane friendAge array hobe etake object keno dekhalo?? asole array cheak korte nicher eta bebohar kora hoy
console.log(Array.isArray(friendAge));  //true 


//array theke item search kono item ache kina ta cheak kora hoy varName.include(value); diye 
console.log(friendAge.includes(22)); //true

//array theke item search kono item ache kina ta cheak kora hoy varName.indexOf; diye 
if (friendAge.indexOf(22) !== -1) {
   console.log('yes This number ache')
}
else {
   console.log('yes This number ache')
}





