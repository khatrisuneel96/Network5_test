import express from 'express'

import { getFbLogin,getGLogin,getDiscLogin,getIgLogin } from '../controllers/loginControllers.js'

const router = express.Router()

router.get('/fb', getFbLogin)
router.get('/g', getGLogin)
router.get('/dc', getDiscLogin)
router.post('/ig', getIgLogin)

export default router