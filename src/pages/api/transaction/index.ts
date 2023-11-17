// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnet from '@/config/mongo'
import Transactions from '@/models/Transaction'

import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnet()
    const { method } = req
    console.log(req.method);
    switch (method) {
        case "POST":
            try {
                // Handler API Anda yang memerlukan verifikasi token
                // Dapat mengakses informasi user yang sudah diverifikasi dari req.user jika perlu
                //@ts-ignore
                // const { gross_amount } = req.body
                //@ts-ignore
                const { id, email, first_name, last_name, gross_amount, productId, kelasId } = req.body
                console.log({ productId });
                const generateOrderId = () => {
                    const prefix = "ALPYID";
                    const timestamp = new Date().getTime().toString();
                    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
                    const orderId = `${prefix}${timestamp}${randomDigits}`;
                    return orderId;
                }
                const order_id = generateOrderId();
                const { data } = await axios.post(`${process.env.MIDTRANS_URL}`, {
                    transaction_details: {
                        order_id,
                        gross_amount,
                    },
                    customer_details: {
                        first_name,
                        last_name,
                        email: email,
                    }
                }, {
                    headers: {
                        Authorization: `Basic ${process.env.NEXT_PUBLIC_KEYPAY}`
                    }
                })
                const result = await Transactions.create({
                    merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
                    user_id: id,
                    order_id,
                    amount: gross_amount,
                    status: "Pending",
                    kelasId : kelasId ? kelasId : "",
                    productId : productId ? productId : []
                })
                res.status(200).json({ msg: "Success", data, result })

            } catch (error) {
                console.log({ error });
                res.status(500).json({ error })
            }
            break;
        case "GET":
            try {
                const data = await Transactions.find({ merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID }).populate({ path: "productId" }).sort({ createdAt: -1 })
                res.status(200).json({ msg: "Success", data })
            } catch (error) {
                console.log({ error });
                res.status(500).json({ error })
            }
            break;
        case "PATCH":
            break;
        case "DELETE":

        default:
            break;
    }
}