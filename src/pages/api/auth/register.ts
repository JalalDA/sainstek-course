import User from '@/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import dbConnet from '@/config/mongo'

const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    try {
        if(req.method !== "POST"){
            return res.status(400).json({msg : "Invalid request"})
        }
        await dbConnet()
        const {username, email, password, phone} = req.body
        const existUsername = await User.findOne({username})
        console.log({existUsername});
        if(existUsername){
            return res.status(400).json({msg : "Username is already exist"})
        }
        const existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({msg : "Email is already exist"})
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            merchantId : process.env.NEXT_PUBLIC_MERCHANT_ID,
            username,
            email,
            password : hashedPassword,
            phone
        })
        res.status(200).json({msg : "Success create user", user})
    } catch (error) {
        console.log({error});
        res.status(500).json({msg : "Internal server error"})
    }
}

export default handler