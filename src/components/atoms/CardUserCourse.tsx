import { formatter } from '@/config/formatter'
import { UserCourse } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

type Props = {
    item: UserCourse
}

const CardUserCourse = ({ item }: Props) => {
    return (
        <div onClick={() => {

        }} className='rounded-lg cursor-pointer hover:scale-105 transition-all ease-linear duration-300 w-48 md:w-72 bg-white dark:bg-[#333333] shadow-xl'>
            <Image src={item.photo || ""} alt='Fullstack Development' height={100} width={100} className='w-full h-48 w-46 rounded-t-lg' />
            <div className="p-4 w-full">
                <div className="text-md font-bold">{item.name}</div>
                <div className="mt-2 flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <div className="line-through text-sm text-red-500">{formatter(Number(item?.price_top) || 0)}</div>
                        <div className="text-md font-bold text-blue-500 ">{formatter(Number(item.price_down) || 0)}</div>
                    </div>
                </div>
                {/* <div className="text-md">Progress</div> */}
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-700 text-white p-2 rounded-b-lg">Selengkapnya</div>
        </div>
    )
}

export default CardUserCourse