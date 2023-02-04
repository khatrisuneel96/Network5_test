import express from 'express'

import { postEmails } from '../controllers/emailControllers.js'

const router = express.Router()

router.post('/', postEmails)

export default router