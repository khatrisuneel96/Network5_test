import express from 'express'

import { getFbLogin,getGLogin,getFbGroups,getDiscLogin } from '../controllers/loginControllers.js'

const router = express.Router()

router.get('/fb', getFbLogin)
router.get('/g', getGLogin)
router.get('/dc', getDiscLogin)
router.get('/groups', getFbGroups)

export default router