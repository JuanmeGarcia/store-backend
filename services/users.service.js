import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

let instanciate

class UsersService {

    constructor() {
        if(instanciate) { throw new Error('Ya existe una instacia de servicio de usuario') }
        instanciate = this
        this.users = []
        this.generate()
    }

    generate() {
        const amount = 5

        this.users = new Array(parseInt(amount))
            .fill()
            .map(() => ({
                id: faker.datatype.uuid().split('-')[0],
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                image: faker.image.imageUrl()
            })
        )
    }

    async createUser(user) {
        const newUser = {
            id: faker.datatype.uuid().split('-')[0],
            ...user
        }

        this.users.push(newUser)

        return newUser
    }

    find(limit, offset = 0) {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(this.users.slice(offset, limit))
            }, 500)
        })
    }

    async findOne(id) {
        const user = this.users.find(user => user.id === id)

        if(!user) { throw boom.notFound('User not found') }

        return user
    }

    async update(id, data) {
        const index = this.users.findIndex(user => user.id === id)

        if(index === -1){
            throw boom.notFound('User not found')
        }
        const user = this.users[index]
        this.users[index] = {
            ...user,
            ...data
        }

        return this.users[index]
    }

    async delete(id) {
        const index = this.users.findIndex(user => user.id === id)

        if(index === -1) {
            throw boom.notFound('User not found')
        }

        this.users.splice(index, 1)

        return {
            id,
            status: 'success',
        }
    }
}

export const userService = Object.freeze(new UsersService())
