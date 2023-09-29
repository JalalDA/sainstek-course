import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { FaChevronDown, FaNoteSticky, FaBagShopping, FaScrewdriverWrench } from 'react-icons/fa6'
import { FaTachometerAlt, FaUserCog, FaRegStickyNote } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

type Props = {}

const Sidebar = (props: Props) => {
    const sidebars = [
        {
            name: "Dashboard",
            route: '/admin',
            icon: FaTachometerAlt
        },
        {
            name: "Talent",
            route: '/admin/talent',
            icon: FaUserCog
        },
        {
            name: "Trainer",
            route: '/admin/trainer',
            icon: FaUserCog
        },
        {
            name: "Kelas",
            route: '/admin/kelas',
            icon: FaUserCog
        },
        {
            name: "Artikel",
            route: '/admin/artikel',
            icon: FaNoteSticky
        },
        {
            name: "Produk",
            route: '/admin/product',
            icon: FaBagShopping
        },
        {
            name: "Layanan",
            route: '/admin/layanan',
            icon: FaScrewdriverWrench
        },
        {
            name: "Halaman",
            route: '/admin/halaman',
            icon: FaRegStickyNote
        },
    ]
    const router = useRouter()
    const params = useSearchParams()
    const i = params.get("i")
    return (
        <div className='hidden md:block p-4 md:p-8 py-12 border-r border-gray-200 h-screen'>
            <div onClick={() => router.replace("/")} className="flex cursor-pointer items-center justify-between w-full mb-8 gap-x-2">
                <div className="flex-shrink-0">
                    <h1 className="text-black dark:text-black font-semibold text-lg">
                        <AiFillCodeSandboxCircle className={"h-8 w-8 text-blue-500"} />
                    </h1>
                </div>
                <div className="text-md font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Sainstek Pringsewu</div>
            </div>
            <div className="flex flex-col gap-y-8">
                {
                    sidebars.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className={`${Number(i) === index && "font-bold text-blue-500"} flex items-center justify-start gap-x-8 `}>
                                <Icon className="text-sm" />
                                <div onClick={() => router.push(`${item.route}?i=${index}`)} key={index} className={`text-md cursor-pointer hover:text-blue-500 hover:font-bold `}>{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex absolute bottom-20 items-center gap-x-10 cursor-pointer hover:text-blue-500 hover:font-bold justify-between">
                <div className="text-md">Logout</div>
                <FiLogOut />
            </div>
        </div>
    )
}

export default Sidebar