import dbConnet from '@/config/mongo';
import { NextApiRequest, NextApiResponse } from 'next';
import OnlineClass from '@/models/Kelas'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  await dbConnet()
  switch (method) {
    case "POST":
      try {
        const {
          title,
          description,
          instructor,
          startDate,
          endDate,
          schedule,
          price,
          maxStudents,
          durationInMinutes,
          videoURL,
          tags,
          thumbnailURL,
          category
        } = req.body;

        const data = await OnlineClass.create({
          title,
          description,
          instructor,
          startDate,
          endDate,
          schedule,
          price,
          maxStudents,
          durationInMinutes,
          videoURL,
          thumbnailURL,
          tags,
        })
        return res.status(201).json({ message: 'Kelas berhasil dibuat', data });
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ message: 'Terjadi kesalahan' });
      }
      break;
    case "GET":
      try {
        let data
        const {id = ""} = req.query
        if(!id){
          data = await OnlineClass.find({})
          return res.status(200).json({data})
        }
        data = await OnlineClass.findOne({_id : id})
        res.status(200).json({msg : "success", data})
      } catch (error) {
        console.log({error});
        res.status(500).json({msg : "Something went wrong"})
      }
      break;
    default:
      break;
  }
};