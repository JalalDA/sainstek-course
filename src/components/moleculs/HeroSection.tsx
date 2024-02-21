import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import { useRouter } from 'next/router'

type Props = {}

const HeroSection = (props: Props) => {
    const router = useRouter();
    return (
        <div className='flex items-center justify-center md:py-32 py-16 px-4 gap-8 flex-col md:flex-row'>
            <div className="w-full md:w-1/2 flex items-center justify-center flex-col gap-y-4">
                <div className="text-2xl md:text-4xl text-center font-bold">
                    Ubah hidupmu
                </div>
                <div className="text-2xl md:text-3xl text-center">Sekarang Juga</div>
                <div className="mt-4  md:text-2xl text-center ">Nikmati berbagai kelas yang bisa memberikan skill untuk membantu mu menyongsong masa depan yang lebih baik</div>
                <Button onClick={()=>{
                    router.push("/login")
                }} title='Daftar Sekarang'/>
            </div>
            <Image className='w-full md:w-1/3' src={"/images/hero.png"} alt='heroimage' height={300} width={300}/>
        </div>
    )
}

export default HeroSection