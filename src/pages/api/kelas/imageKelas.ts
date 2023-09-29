import { upload } from '@/middlewares/upload';
import { NextApiRequest, NextApiResponse } from 'next';


const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    try {
        //@ts-ignore
        upload.single("image")(req, res, async (error) => {
            console.log({error});
            if (error) {
              return res.status(400).json({ message: 'Gagal mengunggah gambar' });
            }
            //@ts-ignore
            const thumbnailUrl = req.file ? req.file.filename : '';
        res.status(200).json({msg : "Sukses upload gambar", thumbnailUrl})
        })
    } catch (error) {
        console.log({error});
        res.status(500).json({msg : "Failed upload image"})
    }
}

export default handler

export const config = {
    api: {
      bodyParser: false
    }
  }