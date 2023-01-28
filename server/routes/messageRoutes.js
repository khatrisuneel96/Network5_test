import express from 'express'

import { getFbMessages } from '../controllers/messageControllers.js'
import { getIgMessages } from '../controllers/messageControllers.js'

const router = express.Router()

router.get('/fb', getFbMessages)
router.get('/ig', getIgMessages)

export default router