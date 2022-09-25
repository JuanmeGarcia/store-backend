import { faker } from '@faker-js/faker';
import boom from '@hapi/boom'
import { sequelize } from '../libs/index.js'

let instanciate

class ProductsService {

    constructor() {
        if(instanciate){ throw new Error('Ya existe una instancia de servicio de producto') }

        instanciate = this
        this.products = []
        this.generate()
    }

    generate() {
        const amount = 10
        this.products = new Array(parseInt(amount)).fill().map(() => ({
                id: faker.datatype.uuid(),
                productName: faker.commerce.product(),
                price: faker.commerce.price(),
                image: faker.image.imageUrl(),
                isBLock: faker.datatype.boolean()
            })
        )
    }

    async createProduct(product) {
        const newProduct = {
            id: faker.datatype.uuid().split('-')[0],
            ...product
        }
        this.products.push(newProduct)

        return newProduct
    }

    async find() {
    }

    async findOne(id) {
        await new Promise(resolve => setTimeout(resolve, 300));

        const product = this.products.find(product => product.id === id)
        if(!product) { throw boom.notFound('Product not found') }
        if(product.isBLock) { throw boom.conflict('Product is blocked')}

        return product
    }

    async update(id, data) {
        const index = this.products.findIndex(product => product.id === id)
        if(index == -1) {
            throw boom.notFound('Product not found')
        }
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...data
        }
        return this.products[index]
    }

    async delete(id) {
        const index = this.products.findIndex(product => product.id === id)

        if(!index === -1) {
            throw boom.notFound('Product not found')
        }

        this.products.splice(index, 1)
        return {
            id,
            status: 'success'
        }
    }
}


const productService = Object.freeze(new ProductsService())

export { productService }
