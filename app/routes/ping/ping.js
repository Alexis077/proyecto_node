const express = require('express')
const router = express.Router()


router.get('/', async (req, resp) =>{
    resp.status(200).send({status: 200, data :{message:"PONG"}})
})



module.exports = router