import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateFullUser, updatePartiallyUser } from "../controllers/users.controller.js";
import { validateFields } from '../middlewares/validator.handler.js'
import {
    createUserSchema,
    updadteUserSchema,
    getUserSchema,
} from '../schemas/user.schema.js'


const router = Router()

router.get('/', getUsers)

router.get(
    '/:id',
    validateFields(getUserSchema, 'params'),
    getUser
)

router.post(
    '/',
    validateFields(createUserSchema, 'body'),
    createUser
)

router.put(
    '/:id',
    validateFields(getUserSchema, 'params'),
    validateFields(updadteUserSchema, 'body'),
    updateFullUser
)

router.patch(
    '/:id',
    validateFields(getUserSchema, 'params'),
    validateFields(updadteUserSchema, 'body'),
    updatePartiallyUser,
)


router.delete(
    '/:id',
    validateFields(getUserSchema, 'params'),
    deleteUser
)

export { router }
