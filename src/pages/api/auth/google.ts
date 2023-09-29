import User from '@/models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnet from '@/config/mongo'
import jwt from 'jsonwebtoken'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "POST") {
            return res.status(400).json({ msg: "Invalid request" })
        }
        await dbConnet()
        const { email, username, photo } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            const newUser = await User.create({
                merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
                username,
                email,
                photo
            })
            const token = jwt.sign({email}, `${process.env.NEXT_PUBLIC_SECRET_KEY}`, {
                expiresIn : '1d'
            })
            return res.status(200).json({msg : "success", token, id : newUser._id})
        }
        const token = jwt.sign({email}, `${process.env.NEXT_PUBLIC_SECRET_KEY}`, {
            expiresIn : '1d'
        })
        return res.status(200).json({msg : "success", token, id : user._id})
    } catch (error) {
        console.log({ error });
        res.status(500).json({ error })
    }
}

export default handler