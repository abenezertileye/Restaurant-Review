const express = require('express')
const router = express.Router()
const { body } = require('express-validator');
const controller = require('../controller/restaurantAuthController')

//sign up
router.post('/signup',[body("name")
.trim()
.isLength({min:1})], controller.signup)


//login
router.post('/login', controller.login)

//logout
router.get('/logout', controller.logout)

module.exports = router