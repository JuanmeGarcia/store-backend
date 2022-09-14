import { Router } from "express";
import { deleteUser, getUser, getUsers, updateFullUser, updatePartiallyUser } from "../controllers/users.controller.js";

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.put('/:id', updateFullUser)

router.patch('/:id', updatePartiallyUser)

router.delete('/:id', deleteUser)

export { router }
