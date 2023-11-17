import UserKelas from "@/models/UserKelas";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "POST":
            try {
                const {
                    kelas_id,
                    user_id
                } = req.body
                const data = await UserKelas.create({
                    kelas_id,
                    user_id,
                    payment_status: "Pending"
                })
                res.status(200).json({ data })
            } catch (error) {
                console.log({ error });
                res.status(500).json({ msg: "Something went wrong" })
            }
            break;
        case "GET":
            try {
                const {id} = req.query 
                const data = await UserKelas.find({user_id : id}).populate("user_id").populate("kelas_id").exec()
                res.status(200).json({data})
            } catch (error) {
                console.log({ error });
                res.status(500).json({ msg: "Something went wrong" })
            }
            break;

        default:
            break;
    }
}

export default handler