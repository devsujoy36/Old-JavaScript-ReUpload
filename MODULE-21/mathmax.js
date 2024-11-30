function winCake(jim, dela, chinku) {
    if (jim > dela && jim > chinku) {
        console.log('Jim will eat the cake');
    }
    else if (dela > chinku && dela > jim) {
        console.log('dela will eat the cake');
    }
    else {
        console.log('Chinku will eat the cake');
    }
}

const jim = 69;
const dela = 97;
const chinku = 99
const caketumikar = winCake(jim, dela, chinku);


// এটাকে আরেকভাবেও করা যায় খুব শর্টকার্ট
const dekhikeboro = Math.max(jim, dela, chinku);
console.log(dekhikeboro);
