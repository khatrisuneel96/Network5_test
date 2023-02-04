import express from 'express'

import { postEvents } from '../controllers/calendarControllers.js'

const router = express.Router()

router.post('/', postEvents)

export default router