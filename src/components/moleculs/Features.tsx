import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className='md:py-16 md:px-32 flex flex-col p-4 gap-y-16'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/kelas.png"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Banyak Pilihan Kelas</div>
                <div className="text-md">Nikmati berbagai macam pilihan kelas yang sesuai dengan bakat dan minat kamu. <br /> Setiap kelas memberikan kamu pengalaman terbaik dalam belajar dan setiap mentor siap membantu mu untuk mendapatkan hasil belajar yang terbaik </div>
                <Button title='Lihat Kelas'/>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/kelas.png"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Banyak Pilihan Kelas</div>
                <div className="text-md">Nikmati berbagai macam pilihan kelas yang sesuai dengan bakat dan minat kamu. <br /> Setiap kelas memberikan kamu pengalaman terbaik dalam belajar dan setiap mentor siap membantu mu untuk mendapatkan hasil belajar yang terbaik </div>
                <Button title='Lihat Kelas'/>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/kelas.png"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Banyak Pilihan Kelas</div>
                <div className="text-md">Nikmati berbagai macam pilihan kelas yang sesuai dengan bakat dan minat kamu. <br /> Setiap kelas memberikan kamu pengalaman terbaik dalam belajar dan setiap mentor siap membantu mu untuk mendapatkan hasil belajar yang terbaik </div>
                <Button title='Lihat Kelas'/>
            </div>
        </div>
    </div>
  )
}

export default Features