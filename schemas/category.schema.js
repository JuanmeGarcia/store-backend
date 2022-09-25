import Joi from 'joi'

const id = Joi.number().integer()
const categoryName = Joi.string().min(3).max(20)
const image = Joi.string().uri()

const createCategorySchema = Joi.object({
    categoryName : categoryName.required(),
    image: image.required()
})

const updateCategorySchema = Joi.object({
    id: id.required(),
    categoryName: categoryName.required(),
    image
})

const getCategorySchema = Joi.object({
    id: id.required()
})

export {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema
}
