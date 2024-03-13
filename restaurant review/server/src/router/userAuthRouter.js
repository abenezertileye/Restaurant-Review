const express = require('express')
const router = express.Router()
const controller = require('../controller/userAuthController')

//signup
router.post('/signup', controller.signup)

//login
router.post('/login', controller.login)

//logout
router.get('/logout', controller.logout)

module.exports = router