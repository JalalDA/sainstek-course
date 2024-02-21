import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import { useRouter } from 'next/navigation'

type Props = {}

const Features = (props: Props) => {
    const router = useRouter()
  return (
    <div className='md:py-16 md:px-32 flex flex-col p-4 gap-y-16'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/kelas.png"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Banyak Pilihan Kelas</div>
                <div className="text-md">Nikmati berbagai macam pilihan kelas yang sesuai dengan bakat dan minat kamu. <br /> Setiap kelas memberikan kamu pengalaman terbaik dalam belajar dan setiap mentor siap membantu mu untuk mendapatkan hasil belajar yang terbaik </div>
                <Button onClick={()=>router.push("/kelas")} title='Lihat Kelas'/>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/7.svg"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Mulai Dari 0</div>
                <div className="text-md">
                    Tak perlu khawatir jika tidak punya latar belakang IT, karena para trainer siap membimbing teman - teman dari nol sehingga teman - teman yang baru belajar pun dapat mengikuti kelas ini tanpa kendala
                </div>
                {/* <Button title='Lihat Kelas'/> */}
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-8">
            <Image className="" src={"/images/grup.svg"} alt='kelaslogo' width={500} height={500}/>
            <div className="p-4  w-full md:w-1/2 flex items-center flex-col gap-y-6 justify-center">
                <div className="text-2xl font-bold">Pelatihan Intensif</div>
                <div className="text-md">
                    Dengan pelatihan intensif 3 hari seminggu selama 4 pekan akan membuat teman teman lebih mudah memahami materi dan juga para trainer siap membantu di luar kelas
                </div>
                <Button title='Lihat Kelas'/>
            </div>
        </div>
    </div>
  )
}

export default Features