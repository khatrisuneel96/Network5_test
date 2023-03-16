import express from 'express'

import { getFbAnalytics,getIgAnalytics } from '../controllers/analyticsControllers.js'

const router = express.Router()

router.get('/ig', getIgAnalytics)
router.get('/fb', getFbAnalytics)

export default router