import express from 'express'

import { getFbLogin,getGLogin,getFbGroups } from '../controllers/loginControllers.js'

const router = express.Router()

router.get('/fb', getFbLogin)
router.get('/g', getGLogin)
router.get('/groups', getFbGroups)

export default router