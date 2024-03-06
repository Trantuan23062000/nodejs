import express from 'express'
const user = require('../controller/user')

const router = express.Router()

router.get('/',user.getUser)

module.exports = router