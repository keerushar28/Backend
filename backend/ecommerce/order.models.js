import mongoose from "mongoose";
const orderItemschema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantiy:{
        type:Number,
        require: true
    }
})
const address = new mongoose.Schema({
    country: {
        type: String,
        require: true,
    },
    district: {
        type: String,
        require: true,
    },
    homeaddress: {
        type: String,
        require: true,
    },
    zipcode: {
        type: Number,
        require: true
    }

})
const orderSchema = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type: [orderItemschema]
    },
    daddress: {
        type: address,
    },
    status:{
        type: String,
        enum: ["Created","PENDING","SHIPPED","DELIVERED","CANCELLED"],
        default: "PENDING"
    }
    
    


}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)
export default Order;