import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'

type Props = {}

const Cta = (props: Props) => {
    return (
        <div className='flex items-center justify-between md:px-32 md:py-16 p-4 '>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white shadow-xl rounded-lg px-4">
                <Image src={"/images/Illustration.png"} alt='ilustration' width={300} height={300} />
                <div className="flex items-start flex-col justify-start  ">
                    <div className="text-xl font-bold">Tunggu apalagi</div>
                    <div className="mt-4 mb-6">Dengan mendaftar sekarang, kamu berhak mendapatkan berbagai macam diskon dan promo menarik yang sayang untuk dilewatkan. Kamu juga berhak untuk mendapatkan berbagai macam bonus </div>
                    <Button title='Daftar Sekarang'/>
                </div>
            </div>
        </div>
    )
}

export default Cta