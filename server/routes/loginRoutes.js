import express from 'express'

import { getFbLogin,getGLogin,getDiscLogin,getIgLogin } from '../controllers/loginControllers.js'

const router = express.Router()

router.post('/fb', getFbLogin)
router.post('/g', getGLogin)
router.post('/dc', getDiscLogin)
router.post('/ig', getIgLogin)

export default router