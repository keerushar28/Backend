import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    desription:{
        type:String,
        required:true

    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,

    },
    price:{
        type: Number,
        default: 0

    },
    stock:{
        type:Number,
        default: 0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rating : {
        type: Number,
        default: 0
        
    }

},{timestamps: true})

const Product = mongoose.model('Product', productSchema)
export default Product;