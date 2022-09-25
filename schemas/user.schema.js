import Joi from 'joi'


const id = Joi.number().integer()
const password = Joi.string().min(8)
const email = Joi.string().email()
// const role = Joi.string().min(4)


const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    // role: role.required()
})

const updadteUserSchema = Joi.object({
    password,
    email,
    // role,
})

const getUserSchema = Joi.object({
    id: id.required()
})

export {
    createUserSchema,
    updadteUserSchema,
    getUserSchema,
}
