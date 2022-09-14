import Joi from 'joi'

const id = Joi.string().uuid()
const productName = Joi
    .string()
    .min(3)
    .max(25)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri()

const createProductSchema = Joi.object({
    productName: productName.required(),
    price: price.required(),
    image: image.required()
})

const updateProductSchema = Joi.object({
    productName,
    price,
    image: image.optional()
})

const getProductSchema = Joi.object({
    id: id.required()
})

export {
    createProductSchema,
    updateProductSchema,
    getProductSchema,
}
