import Kelas from "./Kelas"
import User from "./User"

const mongoose = require("mongoose")

const UserKelas = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : User
    },
    kelas_id : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : Kelas
    },
    payment_status : {
        type : String
    },
    deletedAt : {
        type : Date
    }
}, {
    timestamps : true
})


export default mongoose.models.userkelas ?? mongoose.model("userkelas", UserKelas)