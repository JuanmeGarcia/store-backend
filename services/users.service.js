import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';
import { sequelize } from '../libs/index.js'
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
        const newUser = await sequelize.models.User.create(user)
        return newUser
    }

    async find() {
        const users = await sequelize
            .models.User.findAll()
        return users
    }

    async findOne(id) {
        const user = await sequelize
        .models.User.findByPk(id)

        if(!user) { throw boom.notFound('User not found') }

        return user
    }

    async update(id, data) {
        const user = await this.findOne(id)

        const response = await user.update(data)

        return response
    }

    async delete(id) {
        const user = await this.findOne(id)

        await user.destroy()
        return { id }
    }
}

export const userService = Object.freeze(new UsersService())
