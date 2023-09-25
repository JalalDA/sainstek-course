import CardKelas from '@/components/atoms/CardKelas'
import CardPost from '@/components/atoms/CardPost'
import Fasilitas from '@/components/moleculs/Fasilitas'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'

type Props = {}

const Berita = (props: Props) => {
  const tabKelas = [
    {
        name : "Semua",
        route : "/"
    },
    {
        name : "Design",
        route : "/"
    },
    {
        name : "Programming",
        route : "/"
    },
    {
        name : "Lainnya",
        route : "/"
    },
]
const [isActive, setIsActive] = useState("Semua")
  return (
    <div className=' bg-white dark:bg-[#333333]'>
        <Head><title>Artikel</title></Head>
        <Navbar/>
        <div className="p-4 md:py-16 md:px-32">
                <div className="text-md md:text-2xl font-bold mb-16 text-center">Nikmati berbagai artikel menarik <br /> yang sesuai dengan minat dan bakatmu bersama trainer yang supportive dan menyenangkan</div>
                <Fasilitas/>
                <div className="tab bg-white dark:bg-[#333333] shadow-xl rounded-lg p-4 mt-16 flex items-center justify-start gap-x-8">
                    {
                        tabKelas.map((item, index)=>(
                            <div onClick={()=>setIsActive(item.name)} key={index} className={`${isActive === item.name ? 'font-bold text-blue-500' : ''}  cursor-pointer hover:text-blue-500 hover:font-bold text-md`}>{item.name}</div>
                        ))
                    }
                </div>
                <div className="grid mt-8 grid-cols-2 md:grid-cols-4 gap-x-4 gap-8">
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                    <CardPost/>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Berita