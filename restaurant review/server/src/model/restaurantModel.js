const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
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
restaurantSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

//login
restaurantSchema.statics.login = async function(email, password){
    const restaurant = await Restaurant.findOne({email})
    if(restaurant){
        const auth = await bcrypt.compare(password, restaurant.password)
        if(auth){
            return restaurant 
        }throw Error('incorrect passwrod')
    }throw Error('incorrect email')
}

const Restaurant = mongoose.model('Restaurant', restaurantSchema )

module.exports = Restaurant