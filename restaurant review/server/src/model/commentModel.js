const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    text: {
        type:String
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment