import User from '@/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import dbConnet from '@/config/mongo'
import jwt from 'jsonwebtoken'


const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    try {
        if(req.method !== "POST"){
            return res.status(400).json({msg : "Invalid request"})
        }
        await dbConnet()
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(404).json({msg : `username ${username} is not found`})
        }
        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(400).json({msg : "Wrong password"})
        }
        const token = jwt.sign({username, id : user._id, role : user.role}, `${process.env.NEXT_PUBLIC_SECRET_KEY}`, {
            expiresIn : '1d'
        })
        res.status(200).json({msg : "success", token, id : user._id, role : user.role})
    } catch (error) {
        console.log({error});
        res.status(500).json({error})
    }
}

export default handler