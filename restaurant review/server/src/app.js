const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const restaurantRoute = require('./router/restaurantRouter')
const userRoute = require('./router/userRouter')
const restaurantAuthRoute = require('./router/restaurantAuthRouter')
const userAuthRoute = require('./router/userAuthRouter')
const {userAuthCheck} = require('./middleware/userAuthorization')
const {resAuthCheck} = require('./middleware/restaurantAuthorization')
const port = 3001

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());


//route
app.get('/', (req, res) => {
    res.send('Home page')
})
app.use('/restaurant-service', restaurantRoute)
app.use('/user-service',userAuthCheck, userRoute)
app.use('/restaurant-auth', restaurantAuthRoute)
app.use('/user-auth', userAuthRoute)

//database connection
dbURL = 'mongodb://localhost:27017/newrestautant'
mongoose.connect(dbURL)
    .then(()=>{
        console.log('connected to mongodb')
    })
    .catch((err) => {
        console.log('error connecting to mongodb:', err.message)
    })

//server listening
app.listen(port, () => {console.log('listening to port 3001')} )