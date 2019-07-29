const services = require('../services/products')

async function getProducts(){
   try{
        let data = await services.getProducts()
        return data
   }catch(err){
        return err
   }
}
async function getProduct(id){
    try{
        let data = await services.findProudctById(id)
        return data
    }catch(err){
        return err
    }
}
async function newProduct(product){
    try{
        let data = await services.createProduct(product)
        return data
    }catch(err){
        return err
    }
}
async function updateProduct(product){
    try{
        let data = await services.updateProduct(product)
        return data
    }catch(err){
        return err
    }
}
async function deleteProduct(id){
    try{
        let data = await services.deleteProduct(id)
        return data
    }catch(err){
        return err
    }
}

module.exports = {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    deleteProduct
}
