const jwt = require('jsonwebtoken')

const userAuthCheck = (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        
        try{
            token = req.headers.authorization.split(" ")[1]
            jwt.verify(token, 'osjcosj56as', (err, decodedToken) => {
                
                if(err){
                    res.send(err)
                } else {
                    req.user = decodedToken
                    next()
                }
            })
                
        }catch(err){
            console.log(err)
        }
    }else{
        throw new Error("Not authorized, no token");
    }
}

module.exports = {userAuthCheck}