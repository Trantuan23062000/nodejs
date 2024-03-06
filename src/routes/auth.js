import * as auth from '../controller'
import express from 'express'

const router = express.Router()

router.post('/register',auth.register)

module.exports = router