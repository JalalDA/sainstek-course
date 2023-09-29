import mongoose from "mongoose";

const dbConnet = async ()=>{
    try {
        const mongourl = process.env.NEXT_PUBLIC_MONGO_URI
        
        await mongoose.connect(`${mongourl}`)
        console.log("DB Connected")
    } catch (error) {
        console.log("Fail connect to db");
        console.log({error});
    }
}

export default dbConnet