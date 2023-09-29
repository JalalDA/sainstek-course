import React from 'react'
import Image from 'next/image'
// import { FaStar } from 'react-icons/fa6'
import { OnlineClass } from '@/types'
import styles from './styles.module.css'
import { formatter } from '@/config/formatter'

type Props = {
    items : OnlineClass;
    onClick?: ()=>void;
}

const CardKelas = ({items, onClick}: Props) => {
    return (
        <div onClick={onClick} className='rounded-lg cursor-pointer hover:scale-105 transition-all ease-linear duration-300 w-48 md:w-72 bg-white dark:bg-[#333333] shadow-xl'>
            <Image src={items.thumbnailURL} alt='Fullstack Development' height={100} width={100} className='w-full rounded-t-lg' />
            <div className="p-4 w-full">
                <div className="text-md font-bold">{items.title}</div>
                <div className={`line-clamp-4 text-md mt-2`}>{items.description}</div>
                <div className="mt-2 flex items-center justify-between w-full">
                    {/* <div className="flex items-center gap-x-4">
                        <FaStar className="text-yellow-400" />
                        4.8
                    </div> */}
                    <div className="flex flex-col">
                        <div className="line-through text-sm text-red-500">IDR 1.000.000</div>
                        <div className="text-md font-bold text-blue-500 ">{formatter(items.price)}</div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-700 text-white p-2 rounded-b-lg">Selengkapnya</div>
        </div>
    )
}

export default CardKelas