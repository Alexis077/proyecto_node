const express = require('express')
const router = express.Router()
const ctr = require('../../controllers/users')

router.get('/', async (req, resp) =>{
    try {
        let data = await ctr.getUsers()
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.get('/:id', async (req, resp) =>{
    try {
        let data = await ctr.getUser(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.post('/', async (req, resp) =>{
    console.log(req.body)
    try {
        let data = await ctr.newUser(req.body.name,
            req.body.last_name,
            req.body.email,
            req.body.password,
            req.body.role)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

router.put('/:id', async (req, resp) =>{
    try {
        let data = await ctr.updateUser(req.body.name,
            req.body.last_name,
            req.body.email,
            req.body.role,req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.put('/change_password/:id', async (req, resp) =>{
    try {
        let data = await ctr.updateUserPassword(req.params.id,req.body.password)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.delete('/:id', async (req, resp) =>{
    try {
        let data = await ctr.deleteUser(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

module.exports = router