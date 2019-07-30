const service = require('../services/shopping_car')


async function find(id){
    try {
        return await service.findShoppingCar(id) 
    } catch (error) {
        return error
    }
}
async function create(item){
    try {
        return await service.createShoppingCar(item) 
    } catch (error) {
        return error
    }
}
async function update(item,id){
    try {
        return await service.updateShoppingCar(item,id) 
    } catch (error) {
        return error
    }
}
async function erease(id){
    try {
        return await service.deleteShoppingCar(id) 
    } catch (error) {
        return error
    }
}

module.exports = {
    find,
    create,
    update,
    erease
}