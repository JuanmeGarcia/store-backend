import { userService as service } from "../services/users.service.js";


export const getUsers = async (req, res, next) => {

    try {
        const { limit, offset } = req.query

        const users = await service.find(limit, offset)

        if(!users) {
            return res.status(404).json({
                ok: false,
                message: 'No se han encontrado usuarios'
            })
        }

        if(limit){
            return res.status(200).json({
                offset,
                limit,
                users,
            })
        }

        res.status(400).json({
            msg: 'No hay parametros'
        })

    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {

    try {
        const { id } = req.params

        const user = await service.findOne(id)

        if(!user){
            return res.status(404).json({
                ok: false,
                message: 'No se ha encontrado el usuario'
            })
        }

        return res.status(200).json({
            id,
            user
        })

    } catch (error) {
        next(error)
    }
}

export const updateFullUser = async (req, res, next) => {

    try {
        const { id } = req.params
        const body = req.body

        const updatedUser = await service.update(id, body)

        if(!updatedUser) {
            return res.status(404).json({
                msg: 'User not found',
                ok: false
            })
        }

        return res.status(200).json({
            updatedUser,
            ok: true
        })

    } catch (error) {
        next(error)
    }

}

export const updatePartiallyUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body

        const user = await service.update(id, body)

        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await service.delete(id)

        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}
