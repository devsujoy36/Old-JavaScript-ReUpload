const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product, quantity);

}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${ product }: ${ quantity }`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const shoredCart = localStorage.getItem('cart')
    if (shoredCart) {
        cart = JSON.parse(shoredCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStingified);
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product,quantity);
    }
}

displayProductsFromLocalStorage();