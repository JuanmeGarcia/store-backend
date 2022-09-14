import { categoryService } from '../services/categories.service.js'

export const getCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.find()
        return res.status(200).json({
            categories
        })
    } catch (error) {
        next(error)
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const { categoryId, productId } = req.params
        const { products } = await categoryService.findOne(categoryId)

        const product = products.find(product => product.id === productId)

        if(!product) {
            return res.status(404).json({
                ok: false,
                msg: 'No se ha encontrado ese producto'
            })
        }

        res.status(200).json({
            product
        })
    } catch (error) {
        next(error)
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const { categoryId } = req.params

        const { products } = await categoryService.findOne(categoryId)

        res.status(200).json({
            products
        })
    } catch (error) {
        next(error)
    }
}
