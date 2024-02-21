import React from 'react'
import { BiSupport } from "react-icons/bi";
import { FaLaptopCode, FaCodeCompare, FaNetworkWired, FaMoneyCheckDollar } from "react-icons/fa6";

type Props = {}

const Fasilitas = (props: Props) => {
    const fass = [
        {
            name: "Supportive Trainer",
            icon: BiSupport
        },
        {
            name: "Kurikulum Sesuai Industri",
            icon: FaLaptopCode
        },
        {
            name: "Akses Materi Selamanya",
            icon: FaCodeCompare
        },
        {
            name: "Harga Kelas Terjangkau",
            icon: FaMoneyCheckDollar
        },
    ]
    return (
        <div className='grid-cols-2 md:grid-cols-4 grid p-4 items-center justify-center gap-8'>
            {
                fass.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className="bg-white dark:bg-[#333333] h-36 shadow-xl hover:scale-110 transition-all duration-200 ease-linear p-4 gap-4 rounded-lg flex flex-col items-center justify-center">
                            <Icon className="text-3xl" />
                            <div className="text-md">{item.name}</div>
                        </div>
                    )
                })
            }
            {/* <div className="bg-gray-100 p-4 gap-4 rounded-lg flex flex-col items-center justify-center">
            <FaLaptopCode className="text-3xl"/>
            <div className="text-md"> </div>
        </div>
        <div className="bg-gray-100 p-4 gap-4 rounded-lg flex flex-col items-center justify-center">
            <FaCodeCompare className="text-3xl"/>
            <div className="text-md"></div>
        </div>
        <div className="bg-gray-100 p-4 gap-4 rounded-lg flex flex-col items-center justify-center">
            <FaNetworkWired className="text-3xl"/>
            <div className="text-md"></div>
        </div> */}
        </div>
    )
}

export default Fasilitas