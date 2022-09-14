import { Router } from 'express'
import { getCategories, getProduct, getProducts } from '../controllers/categories.controller.js'
const router = Router()

router.get('/', getCategories)

router.get('/:categoryId/products/:productId', getProduct)

router.get('/:categoryId/products', getProducts)

export { router }
