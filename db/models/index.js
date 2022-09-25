import { User, UserSchema } from './user.model.js'
import { Product, ProductSchema } from './product.model.js'

export const setupModels = (sequelize) => {
    User.init(UserSchema, User.config(sequelize))
    Product.init(ProductSchema, Product.config(sequelize))
}
