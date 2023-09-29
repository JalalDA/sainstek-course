const mongoose = require('mongoose')


const image = new mongoose.Schema({
    imageUrl : {
        type : String,
        require : true,
    },
    deletedAt : {
        type : Date
    }
   
}, {
    timestamps : true
})


export default mongoose.models.image ?? mongoose.model("image", image)