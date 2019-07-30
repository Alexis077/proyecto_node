const ShoppingCar = require('../models/shopping_car')


async function findShoppingCar(id){
    try {
        return await ShoppingCar.findById({_id:id})   
    } catch (error) {
        return error
    }
}
async function createShoppingCar(item){
    try {
        let shopping_car = new ShoppingCar(item)
        return await shopping_car.save()   
    } catch (error) {
        return error
    }
}
async function updateShoppingCar(item,id){
    try {
        return await ShoppingCar.findByIdAndUpdate({_id:id},{$set:item})   
    } catch (error) {
        return error
    }
}
async function deleteShoppingCar(id){
    try {
        return await ShoppingCar.findByIdAndDelete({_id:id})   
    } catch (error) {
        return error
    }
}

module.exports = {
    findShoppingCar,
    createShoppingCar,
    updateShoppingCar,
    deleteShoppingCar
}