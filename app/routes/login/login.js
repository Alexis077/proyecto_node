const express = require('express')
const router = express.Router()
const ctr = require('../../controllers/login')

router.post('/', async (req, resp) =>{
    try {
        let token = await ctr.getToken(req.body.email,req.body.password)
        resp.status(200).send({status: 200,data:{token:token}})
    } catch (error) {
        resp.status(500).send(error)
    }
})


module.exports = router