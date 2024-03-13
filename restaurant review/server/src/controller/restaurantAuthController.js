const Restaurant = require('../model/restaurantModel')
const jwt = require('jsonwebtoken')

//create token
let MaxAge = 3*24*60*60
function createToken(id){
    return jwt.sign({id}, 'osjcosj56as', {expiresIn:MaxAge})
}

//signup
exports.signup = async(req, res) => {
    const {name, email, password} = req.body
    try{
        const restaurant = await Restaurant.create({name, email, password})
        const token = createToken(restaurant._id)
        res.send(
            {name:name,
            email:email,
            token:token,}
        )
    }catch(err){
        console.log(err.message)
    }
}

//login
exports.login = async function(req, res){
    const {email, password} = req.body
    try{
        const restaurant = await Restaurant.login(email, password)
        const token = createToken(restaurant._id)
        const theRestaurant = await Restaurant.findById(restaurant._id);
        res.send(
            {name:theRestaurant.name,
            email:email,
            token:token,}
        )
        
    }catch(err){
        res.send(err.message)
    }
}

//logout
exports.logout = async (req, res) => {
    try{
        res.send('')
    }catch(err){
        console.log(err)
    }
}