import Joi from 'joi'

const id = Joi.number().integer()
const userId = Joi.number().integer()
const productId = Joi.number().integer()
const amount = Joi.number().integer().min(1)

const getOrderSchema = Joi.object({
    id: id.required(),
});

const createOrderSchema = Joi.object({
    userId: userId.required(),
});

const addItemSchema = Joi.object({
    id: orderId.required(),
    productId: productId.required(),
    amount: amount.required(),
});


export {
    getOrderSchema,
    createOrderSchema,
    addItemSchema,
}
