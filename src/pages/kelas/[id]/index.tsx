import ButtonLoading from '@/components/atoms/ButtonLoading'
import Fasilitas from '@/components/moleculs/Fasilitas'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import { formatter } from '@/config/formatter'
import { RootState } from '@/store/reducers'
import { OnlineClass } from '@/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'


const SingleKelas = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [isLoadingPay, setIsLoadingPay] = useState(false)
    const router = useRouter()
    const user = useSelector((state:RootState)=>state.user.user)

    const checkout = async ()=>{
        setIsLoadingPay(true)
        try {
            const {data} = await CustomAxios.post(`/transaction/snap`, {
                course_id : repo.course_id,
                gross_amount : repo.price_down
            })
            if(data){
                window.open(data?.url, "_blank")
            }
            router.push('/profile/invoice_saya')
            toast.success("Success create transaction")
        } catch (error) {
            console.log({error});
            toast.error("Something went wrong")            
        }
        setIsLoadingPay(false)
    }
    return (
        <div className='bg-white dark:bg-[#333333]'>
            <Head><title>Kelas</title></Head>
            <Navbar />
            <ToastContainer autoClose={1000} />
            <div className="p-4 md:py-16 md:px-32">
                <div className="text-md md:text-2xl font-bold mb-16 text-center">Nikmati berbagai macam kelas <br /> pilihan yang sesuai dengan minat dan bakatmu bersama trainer yang supportive dan menyenangkan</div>
                <Fasilitas/>
                <div className="text-xl font-bold my-4">{repo.name}</div>
                <div className="flex items-start gap-8 flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/3">
                        {/* <img src={repo.thumbnailURL} alt="" /> */}
                        <Image className='h-96' height={800} width={600} alt={`${repo.name}`} src={repo?.photo || ""}/>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="bg-white dark:bg-[#333] shadow-xl p-4 rounded-lg">
                            <div className="text-md mb-4">{repo.about}</div>
                            <div className="text-md font-bold">Untuk siapa kelas ini : </div>
                            <div className='text-md mb-4' dangerouslySetInnerHTML={{__html : repo.for_who || ""}}></div>
                            <div className="text-md font-bold">Requirement mengikuti kelas ini : </div>
                            <div className='text-md mb-4' dangerouslySetInnerHTML={{__html : repo.requirement || ""}}></div>
                            <div className="text-md font-bold">Durasi kelas ini : </div>
                            <div className='text-md mb-4'>{`${repo.duration} Pekan`}</div>
                            <div className="text-md font-bold">Yang akan dipelajari pada kelas ini : </div>
                            <div className='text-md mb-4' dangerouslySetInnerHTML={{__html : repo.will_learn || ""}}></div>
                            <div className="line-through text-sm text-red-500 mt-4">{formatter(repo?.price_top || 0)}</div>
                            <div className="text-md font-bold mb-2">{formatter(repo.price_down || 0)}</div>
                            <ButtonLoading onClick={checkout} buttonText='Beli Sekarang' isLoading={isLoadingPay}/>
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
    const { data } = await CustomAxios.get(`/course/${id}`)

    const repo = data.course
    return { props: { repo } }
}