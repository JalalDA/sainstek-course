const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    merchantId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    priceBuy: {
        type: Number,
        require: true
    },
    priceSale: {
        type: Number,
        require: true
    },
    suplier: {
        type: String,
        require: true,
        default: ""
    },
    condition: {
        type: String,
        require: true,
        default: ""
    },
    category: {
        type: String,
        require: true,
        default: ""
    },
    description: {
        type: String,
        require: true,
        default: ""
    },
    photo: {
        type: String,
        default: ""
    },
    stock: {
        type: Number
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})


export default mongoose.models.product ?? mongoose.model("product", Product)