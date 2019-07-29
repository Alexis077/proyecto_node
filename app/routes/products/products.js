const express = require('express')
const router = express.Router()
const ctr = require('../../controllers/products')

router.get('/', async (req, resp) =>{
    try {
        let data = await ctr.getProducts()
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.get('/:id', async (req, resp) =>{
    try {
        let data = await ctr.getProduct(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.post('/', async (req, resp) =>{
    console.log(req.body)
    try {
        let product ={
            quantity:req.body.quantity,
            description:req.body.description,
            unit_price:req.body.unit_price
        }
        let data = await ctr.newProduct(product)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

router.put('/:id', async (req, resp) =>{
    try {
        let product ={
            id:req.params.id,
            quantity:req.body.quantity,
            description:req.body.description,
            unit_price:req.body.unit_price
        }
        let data = await ctr.updateProduct(product)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})
router.delete('/:id', async (req, resp) =>{
    try {
        let data = await ctr.deleteProduct(req.params.id)
        resp.status(200).send({status: 200, data : data, detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send(error)
    }
})

module.exports = router