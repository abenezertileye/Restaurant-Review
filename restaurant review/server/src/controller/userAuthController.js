const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

//create token
let MaxAge = 3*24*60*60
function createToken(id){
    return jwt.sign({id}, 'osjcosj56as', {expiresIn:MaxAge})
}

//sign up
exports.signup = async(req, res) => {
    const {name, email, password} = req.body
    try{
        const user = await User.create({name, email, password})
        const token = createToken(user._id)
        
        res.send(
            {name:name,
            email:email,
            token:token,}
        )
    }catch(err){
        res.status(404).send(err.message)
    }
}

// login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        const theUser = await User.findById(user._id);
        res.send({
            name: theUser.name,
            email: email,
            token: token,
        });
    } catch (err) {
        res.send(err.message);
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
