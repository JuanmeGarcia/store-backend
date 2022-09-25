import { Router } from 'express'
import { getCategories, getProduct, getProducts } from '../controllers/categories.controller.js'
import { validateFields } from '../middlewares/validator.handler.js'
import { getCategorySchema} from '../schemas/category.schema.js'
import { getProductSchema } from '../schemas/product.schema.js'


const router = Router()

router.get('/', getCategories)

router.get(
    '/:categoryId/products/:productId',
    validateFields(getCategorySchema, 'params'),
    validateFields(getProductSchema, 'params'),
    getProduct
)

router.get(
    '/:categoryId/products',
    validateFields(getCategorySchema, 'params'),
    getProducts
)

export { router }
