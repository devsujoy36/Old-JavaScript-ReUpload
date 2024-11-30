class Vehical{
    constructor(){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Gari chole na Chole na Chole na re')
    }
}

class Bus extends Vehical{
    constructor(name, price , seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
        
    }
}

class Truck extends Vehical{
    constructor(name, price, load){
        super(name, price);
        this.load = load;

    }
}






