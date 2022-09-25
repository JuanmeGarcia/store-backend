import { Router } from "express";

const router = Router()


router.get('/', (req, res, next) => {

    res.status(200).json({
        msg: 'todo bien!'
    })
})

router.get('/:orderId' , (req, res, next) => {
    const { orderId } = req.params

    res.status(200).json({
        msg: `todo bien!`,
        orderId
    })
})

router.post('/', (req, res, next) => {

    res.status(201).json({
        msg: `todo bien!`
    })
})

router.put('/:orderId', (req, res, next) => {
    const { orderId } = req.params
    res.status(200).json({
        msg: `todo bien!`,
        orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    const { orderId } = req.params
    res.status(200).json({
        msg: `todo okis`,
        orderId
    })
})



export { router }
