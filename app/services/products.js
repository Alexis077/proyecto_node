
const exec = require('../execution/execution')

async function getProducts(){
    try{
        let sql = `SELECT id,quantity,description,unit_price,(unit_price * quantity) as import FROM products;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function findProudctById(id) {
    try{
        let sql = `SELECT id,quantity,description,unit_price,(unit_price * quantity) as import FROM products WHERE id = '${id}' LIMIT 1;`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function createProduct(product) {
    try{
        let sql = `INSERT INTO products (quantity,description,unit_price) VALUES ('${product.quantity}','${product.description}',${product.unit_price});`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function updateProduct(product) {
    try{
        let sql = `UPDATE products SET quantity = '${product.quantity}',description = '${product.description}',unit_price = ${product.unit_price} WHERE id = ${product.id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}
async function deleteProduct(id) {
    try{
        let sql = `DELETE FROM products WHERE id = ${id};`
        let data = await exec.executeGet(sql)
        return data
    }catch(err){
        return err
    }
}


module.exports = {
    getProducts,
    findProudctById,
    createProduct,
    updateProduct,
    deleteProduct
}