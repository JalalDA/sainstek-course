import CardKelas from '@/components/atoms/CardKelas'
import Fasilitas from '@/components/moleculs/Fasilitas'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}



const Kelas = ({repo}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const tabKelas = [
        {
            name : "Semua",
            route : "/"
        },
        // {
        //     name : "Design",
        //     route : "/"
        // },
        // {
        //     name : "Programming",
        //     route : "/"
        // },
        // {
        //     name : "Lainnya",
        //     route : "/"
        // },
    ]
    const [isActive, setIsActive] = useState("Semua")
    const router = useRouter()
    return (
        <div className='bg-white dark:bg-[#333333]'>
            <Head><title>Kelas</title></Head>
            <Navbar />
            <div className="p-4 md:py-16 md:px-32">
                <div className="text-md md:text-2xl font-bold mb-16 text-center">Nikmati berbagai macam kelas <br /> pilihan yang sesuai dengan minat dan bakatmu bersama trainer yang supportive dan menyenangkan</div>
                <Fasilitas/>
                <div className="tab bg-white dark:bg-[#333333] shadow-xl rounded-lg p-4 mt-16 flex items-center justify-start gap-x-8">
                    {
                        tabKelas.map((item, index)=>(
                            <div onClick={()=>setIsActive(item.name)} key={index} className={`${isActive === item.name ? 'font-bold text-blue-500' : ''}  cursor-pointer hover:text-blue-500 hover:font-bold text-md`}>{item.name}</div>
                        ))
                    }
                </div>
                <div className="grid mt-8 grid-cols-2 md:grid-cols-4 gap-x-4 gap-8">
                    {
                        repo.map((item, index)=>(
                            <CardKelas onClick={()=>router.push(`kelas/${item.course_id}`)} items={item} key={index}/>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Kelas


export const getServerSideProps: GetServerSideProps<{
    repo: any[]
  }> = async () => {
    const { data } = await CustomAxios.get(`/course`)
    return { props: { repo : data.courses } }
  }