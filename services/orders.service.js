

let instanciate

class OrdersService {
    constructor(){
        if(instanciate) { throw new Error('Ya existe una instacia del servicio de ordenes') }
        instanciate = this
    }

    createOrder(){

    }

    find(){

    }

    findOne(){

    }

    updateOrder(){

    }

    deleteOrder(){

    }
}

const orderService = Object.freeze(new OrdersService())

export { orderService }
