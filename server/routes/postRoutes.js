import express from 'express'

import { postFbPosts } from '../controllers/postControllers.js'

const router = express.Router()

router.post('/', postFbPosts)

export default router