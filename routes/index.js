import { Router } from 'express'
import { router as productRouter } from './products.router.js'
import { router as userRouter } from './users.router.js'
import { router as categoryRouter } from './categories.router.js'
import { router as orderRouter } from './orders.router.js'


export function routerApi(app) {
    const router = Router()
    app.use('/api/v1', router)

    router.use('/products', productRouter)
    router.use('/users', userRouter)
    router.use('/categories', categoryRouter)
    router.use('/orders', orderRouter)
}
