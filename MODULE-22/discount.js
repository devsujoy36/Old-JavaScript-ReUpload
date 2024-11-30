// first100Rate = 100;
// Second100Rate = 90;
// restRate = 70;



function ticketPrice(ticketQuantity) {
    const first100Rate = 100; 
    const second100Rate = 90; 
    const restticketRate = 70;
    
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restticketQuantity = ticketQuantity - 100;
        const restticketprice = restticketQuantity * second100Rate;
        const price = first100Price + restticketprice;
        return price;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100* second100Rate;
        const restticketQuantity = ticketQuantity - 200;
        const restticketprice = restticketQuantity * restticketRate;
        const price = first100Price + second100Price + restticketprice;
        return price;
    }

}

const ticketQuantity = 250;
const price = ticketPrice(ticketQuantity);
console.log('Your Total Ticket Price is: ', price);