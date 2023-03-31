import express from 'express'

// controller functions
import { getUsers, loginUser, signupUser } from '../controllers/userController.js'

const router = express.Router()


router.post('/login', loginUser)
router.post('/signup', signupUser)
router.get('/get', getUsers)

export default router