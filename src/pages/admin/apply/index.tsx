import Button from '@/components/atoms/Button'
import CardSkeleton from '@/components/atoms/CardSkeleton'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import { Application } from '@/types'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {}

const Apply = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Application[]>([])

    const getApply = async()=>{
        setIsLoading(true)
        try {
            const data = await CustomAxios.get(`/apply`)
            setData(data.data?.data)
        } catch (error) {
            console.log({error});
            toast.error("Terjadi kesalahan, coba lagi nanti")
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        getApply()
    }, [])
  return (
    <Layout title='Lamaran'>
        {/* {
            isLoading ? 
            <>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            </>
        } :  */}
        <div className="text-md p-4">
            {data.map((item, index)=>(
                <div key={index} className="text-md border borer gray-500 p-2 mt-2 rounded-lg">
                    <div className="text-md mb-2">{`Nama : ${item.username}`}</div>
                    <div className="text-md mb-2">{`Email : ${item.email}`}</div>
                    <div className="text-md mb-2">{`Alamat : ${item.address}`}</div>
                    <div className="text-md mb-2">{`Nomor Handphone : ${item.phone}`}</div>
                    <Button onClick={()=>window.open(item.resume)} title='Lihat CV'/>
                </div>
            ))}
        </div>
    </Layout>
  )
}

export default Apply