const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShoppingCar = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type:Number,
        required: true,
    },
    product_id: {
        type: Number,
        required: true,
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    unit_price:{
        type:Number,
        required:true
    },
    import:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('shopping_car',ShoppingCar)