const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')

//get user service page
router.get('/', controller.index)

//create comment
router.post('/:restaurantId/comment', controller.comment )

module.exports =  router