import {  productService as service } from '../services/products.service.js';

export const getProducts = async (req, res, next) => {
    try {
        const products = await service.find()

        res.status(200).json({
            amount: products.length,
            products
        });

    } catch (error) {
        next(error)
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await service.findOne(id)

        res.status(200).json({
            id,
            product
        });
    } catch (error) {
        next(error)
    }
}


export const createProduct = async (req, res, next) => {
    try {
        const body = req.body;

        const product = await service.createProduct(body)

        res.status(201).json({
            product,
            msg: 'Producto creado'
        })
    } catch (error) {
        next(error)
    }
}

export const updateFullProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const product = await service.update(id, body)

        res.status(200).json({
            product,
            msg: 'Producto actualizado'
        })
    } catch (error) {
        next(error)
    }
}

export const updatePartiallyProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body

        const product = await service.update(id, body)

        res.status(200).json({
            product,
            msg: 'Producto actualizado parcialmente'
        })
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const product = await service.delete(id)

        res.status(200).json({
            product,
            msg: 'Producto eliminado'
        })

    } catch (error) {
        next(error)
    }
}
