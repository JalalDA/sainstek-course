import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import { useRouter } from 'next/router'

type Props = {}

const Cta = (props: Props) => {
    const router = useRouter()
    return (
        <div className='flex items-center justify-between md:px-32 md:py-16 p-4 '>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white dark:bg-[#333333] shadow-xl rounded-lg px-4">
                <Image src={"/images/Illustration.png"} alt='ilustration' height={200} width={500} />
                <div className="flex items-start flex-col justify-start  ">
                    <div className="text-xl font-bold">Tunggu apalagi</div>
                    <div className="mt-4 mb-6">Dengan mendaftar sekarang, kamu berhak mendapatkan berbagai macam diskon dan promo menarik yang sayang untuk dilewatkan. Kamu juga berhak untuk mendapatkan berbagai macam bonus </div>
                    <Button onClick={()=>{
                        router.push("/login")
                    }} title='Daftar Sekarang'/>
                </div>
            </div>
        </div>
    )
}

export default Cta