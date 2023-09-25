import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

type Props = {}

const CardKelas = (props: Props) => {
    return (
        <div className='rounded-lg cursor-pointer hover:scale-105 transition-all ease-linear duration-300 w-56 md:w-72 bg-white dark:bg-[#333333] shadow-xl'>
            <Image src={"/images/fullstackdev.png"} alt='Fullstack Development' height={200} width={200} className='w-full rounded-t-lg' />
            <div className="p-4 w-full">
                <div className="text-xl font-bold">Fullstack Web Development (JavaScript) </div>
                <div className="text-md mt-2">Javascript merupakan salah satu bahasa pemrograman yang sangat populer di dunia. Hal ini tidak terlepas dari kemudahan dalam mempelajarinya dan juga fleksibilitasnya yang dapat digunakan untuk mendevelop berbagai macam aplikasi termasuk aplikasi web, baik dari sisi frontend maupun backend</div>
                <div className="mt-2 flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-4">
                        <FaStar className="text-yellow-400" />
                        4.8
                    </div>
                    <div className="flex flex-col">
                        <div className="line-through text-sm text-red-500">IDR 1.000.000</div>
                        <div className="text-md font-bold text-blue-500 ">IDR 500.000</div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-700 text-white p-2 rounded-b-lg">Selengkapnya</div>
        </div>
    )
}

export default CardKelas