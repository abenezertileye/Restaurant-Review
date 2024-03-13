const express = require('express')
const router = express.Router()
const controller = require('../controller/restaurantController')

//get restaurant service page
router.get('/', controller.index)

module.exports = router