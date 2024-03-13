const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//hashing password
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//login
userSchema.statics.login = async function(email, password){
    const user = await User.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password) 
        if(auth){
            return user
        }throw Error('incorrect password')
    }throw Error('incorrect email')
}

const User = mongoose.model('User', userSchema)

module.exports = User
