import express from 'express'

import { postWebhooks } from '../controllers/webhookControllers.js'

const router = express.Router()

router.post('/', postWebhooks)

export default router