import { faker } from '@faker-js/faker';
import { pool } from '../libs/postgres.pool.js';
import { productService } from './products.service.js'
let instanciate

export class CategoriesService {

    constructor() {
        if(instanciate) { throw new Error('Ya existe una instancia de servicio de categorias') }
        instanciate = this
        this.categories = []
        this.generate()

        this.pool = pool
        this.pool.on('error', (err)=> (
            console.log(error)
        ))
    }

    generate(){
        const amount = 5

        const products = productService.find()


        this.categories = new Array(amount)
            .fill()
            .map(()=>({
                id: faker.datatype.uuid().split('-')[0],
            }))
        const tempArray = [...this.categories]

        const chunkSize = Math.floor(products.length / this.categories.length)

        for (let i = 0; i < tempArray.length; i++) {
            for(let j = 0; j < products.length; j += chunkSize){
                const chunk = products.slice(j, j + chunkSize)
                tempArray[i] = {
                    ...tempArray[i],
                    products: [...chunk]
                }
            }
        }

        this.categories = tempArray
    }

    async createCategory(category) {
        const newCategory = {
            id: faker.datatype.uuid(),
            ...category
        }
        this.categories.push(newCategory)
    }

    async find() {
        return this.categories
    }

    async findOne(id) {
        const category = this.categories.find(category => category.id === id)

        if(!category) { throw boom.notFound('Category not found') }

        return category
    }

    async findIndexOf(id){
        return this.categories.findIndex(category => category.id === id)
    }

    async update(id, data) {
        const index = this.findIndexOf(id)
        if(index === - 1) { throw boom.notFound('Category not found') }

        const category = this.categories[index]

        this.categories[index] = {
            ...category,
            ...data
        }

        return this.categories[index]
    }

    async delete(id) {
        const index = this.findIndexOf(id)

        if(index === -1) { throw boom.notFound('Category not found') }

        this.categories.splice(index, 1)

        return {
            id,
            status: 'success'
        }
    }
}


export const categoryService = Object.freeze(new CategoriesService())
