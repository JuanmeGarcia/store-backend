import { Router } from 'express'
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateFullProduct,
    updatePartiallyProduct
} from '../controllers/products.controller.js';

import { validateFields } from '../middlewares/validator.handler.js'

import {
    createProductSchema,
    updateProductSchema,
    getProductSchema
} from '../schemas/product.schema.js'


const router = Router()

router.get('/', getProducts);

router.get(
    '/:id',
    validateFields(getProductSchema, 'params'),
    getProduct
);

router.post(
    '/',
    validateFields(createProductSchema, 'body'),
    createProduct
)

router.put(
    '/:id',
    validateFields(getProductSchema, 'params'),
    validateFields(updateProductSchema, 'body'),
    updateFullProduct
)

router.patch(
    '/:id',
    validateFields(getProductSchema, 'params'),
    validateFields(updateProductSchema, 'body'),
    updatePartiallyProduct
)

router.delete(
    '/:id',
    validateFields(getProductSchema, 'params'),
    deleteProduct
)

export { router }
