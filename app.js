require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const users = require('./app/routes/users/users')
const ping = require('./app/routes/ping/ping')
const middleware = require('./app/middleware/middleware')
app.use(middleware.validate)
app.use('/users', users)
app.use('/ping',ping)
app.listen(process.env.NODE_SERVER_PORT, () =>{
    if(process.env.DEVELOP === "true"){
        console.log(`Se inicio el server en el puerto ${process.env.NODE_SERVER_PORT}`)
    }
})

