const mongoose = require('mongoose')


const User = new mongoose.Schema({
    merchantId : {
        type : mongoose.Types.ObjectId,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    role : {
        type : String,
        default : "user"
    },
    pin : {
        type : String,
        default : 0
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    balance : {
        type : Number,
        require : true,
        default : 0
    },
    about : {
        type : String,
        require : true,
        default : ""
    },
    photo : {
        type : String,
        default : ""
    },
    address : {
        type : String,
        default : ""
    },
    status : {
        type : String,
        default : ""
    },
    birthDay : {
        type : Date,
    },
    membership : {
        type : String,
        default : ""
    },
    cardId : {
        type : String,
        default : ""
    },
    gender : {
        type : String,
        default : "Male"
    },
    deletedAt : {
        type : Date,
        default : null
    }
}, {
    timestamps : true
})


export default mongoose.models.user ?? mongoose.model("user", User)