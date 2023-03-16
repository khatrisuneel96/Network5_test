import express from 'express'

import { postEvents, getEvents } from '../controllers/calendarControllers.js'

const router = express.Router()

router.post('/post', postEvents)
router.get('/get', getEvents)

export default router