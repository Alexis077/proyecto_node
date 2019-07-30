const express = require('express')
const router = express.Router()
const ctr = require('../../controllers/shopping_car')

router.get('/:id', async (req, resp) =>{
    try {
        let data = await ctr.find(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.post('/', async (req, resp) =>{
    try {
        let data = await ctr.create(req.body)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

router.put('/:id', async (req, resp) =>{
    try {
        let data = await ctr.update(req.body,req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.delete('/:id', async (req, resp) =>{
    try {
        let data = await ctr.erease(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

module.exports = router