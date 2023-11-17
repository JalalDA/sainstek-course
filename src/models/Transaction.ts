const mongoose = require('mongoose')
import Kelas from "./Kelas"
import Product from "./Product"


const Transaction = new mongoose.Schema({
    merchantId : {
        type : mongoose.Types.ObjectId,
        require : true,
        default : null
    },
    user_id : {
        type : mongoose.Types.ObjectId,
        require : true,
        default : null
    },
    order_id : {
        type : String,
        require : true,
        default : null
    },
    amount : {
        type : Number,
        require : true,
        default : 0
    },
    transaction_type : {
        type : String,
        default : "Top Up"
    },
    payment_type : {
        type : String
    },
    status : {
        type : String,
        default : "Pending"
    },
    kelasId : {
        type : mongoose.Types.ObjectId,
        ref : Kelas
    },
    productId : [
        {
            type : mongoose.Types.ObjectId,
            ref : Product
        }
    ],
    deletedAt : {
        type : Date,
        default : null
    }
}, {
    timestamps : true
})


export default mongoose.models.transaction ?? mongoose.model("transaction", Transaction)