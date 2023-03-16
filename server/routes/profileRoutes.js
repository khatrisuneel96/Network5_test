import express from 'express'

import { postProfile, getProfile } from '../controllers/profileControllers.js'

const router = express.Router()

router.post('/post', postProfile)
router.post('/get', getProfile)

export default router