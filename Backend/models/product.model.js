import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name :{
        type: String,
        required: true 
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
},{
    timestamps: true //show when post was created or updated 
});

const Product = mongoose.model('product', productSchema);//this is our products collection 

export default Product;