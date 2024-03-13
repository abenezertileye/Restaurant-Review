const jwt = require('jsonwebtoken')
const resAuthCheck = (req, res) => {
    const token = req.cookie.jwt
    if(token){
        jwt.verify(token, 'osjcosj56as', (err, decodeToken) => {
            if(err){
                res.redirect('/restaurant-auth/login')
            }else{
                next()
            }
        })
    }else{
        res.redirect('/restaurant-auth/login')
    }
}

module.exports = {resAuthCheck}