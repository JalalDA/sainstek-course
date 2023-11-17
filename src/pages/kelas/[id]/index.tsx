import ButtonLoading from '@/components/atoms/ButtonLoading'
import Fasilitas from '@/components/moleculs/Fasilitas'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { formatter } from '@/config/formatter'
import { RootState } from '@/store/reducers'
import { OnlineClass } from '@/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const SingleKelas = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [isActive, setIsActive] = useState("Semua")
    const [isLoadingPay, setIsLoadingPay] = useState(false)
    const router = useRouter()
    const startDate = new Date(repo.startDate)
    const formatedStartDate = startDate.toISOString().split("T")[0]
    const endDate = new Date(repo.endDate)
    const formatedEndDate = endDate.toISOString().split("T")[0]
    const user = useSelector((state:RootState)=>state.user.user)

    const bayar = async () => {
        setIsLoadingPay(true)
        try {
            const {_id, email, username} = user
            const data = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/transaction`, {
                gross_amount: repo.price,
                email,
                id : _id,
                first_name : username,
                last_name : username,
                kelasId : repo._id
            })
            if(data.status === 200){
            //   dispatch(emptyCart([]))
            }
            const url = data?.data?.data?.redirect_url
            window.open(`${url}`, "_blank")
            router.push('/profile')
        } catch (error) {
            console.log({ error });
        }
        setIsLoadingPay(false)
    }
    return (
        <div className='bg-white dark:bg-[#333333]'>
            <Head><title>Kelas</title></Head>
            <Navbar />
            <div className="p-4 md:py-16 md:px-32">
                <div className="text-md md:text-2xl font-bold mb-16 text-center">Nikmati berbagai macam kelas <br /> pilihan yang sesuai dengan minat dan bakatmu bersama trainer yang supportive dan menyenangkan</div>
                <Fasilitas/>
                <div className="text-xl font-bold my-4">{repo.title}</div>
                <div className="flex items-start gap-8 flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/3">
                        <img src={repo.thumbnailURL} alt="" />
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="bg-white shadow-xl p-4 rounded-lg">
                            <div className="text-md">{repo.description}</div>
                            <div className="text-md font-bold mt-8">{formatter(repo.price)}</div>
                            <div className="text-md mt-2">Mulai Kelas : {formatedStartDate}</div>
                            <div className="text-md mt-2">Berakhir Kelas : {formatedEndDate}</div>
                            <div className="text-md mt-2">Trainer Kelas : {repo.instructor}</div>
                            <div className="text-md mt-2 mb-4">Jadwal Kelas : {repo.schedule}</div>
                            <ButtonLoading onClick={bayar} buttonText='Beli Sekarang' isLoading={isLoadingPay}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SingleKelas

export const getServerSideProps: GetServerSideProps<{
    repo: OnlineClass
}> = async (context) => {
    const { params } = context
    //@ts-ignore
    const id = params?.id
    console.log({ idparams: id });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas?id=${id}`)

    const repo = data.data
    return { props: { repo } }
}