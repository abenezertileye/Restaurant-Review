const Comment = require('../model/commentModel')

exports.index = (req, res) => {
    res.send('user service')
}

exports.comment = async(req, res) => {
    const user = req.user._id
    // const user = req.body.user
    const restaurant = req.params.restaurantId
    const text = req.body.text
    console.log({user, restaurant, text})
    try{
        const comment = await Comment.create({user, restaurant, text})
        res.send(comment) 
    }catch(err){
        res.status(404).send(err.message)
    }
}