import express from 'express'

import { postEmails, getEmails } from '../controllers/emailControllers.js'

const router = express.Router()

router.post('/send', postEmails)
router.get('/list', getEmails)

export default router