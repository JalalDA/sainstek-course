import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { FaChevronDown, FaNoteSticky, FaBagShopping, FaScrewdriverWrench, FaBook, FaBroom, FaBookAtlas } from 'react-icons/fa6'
import { FaTachometerAlt, FaUserCog, FaRegStickyNote, FaBookReader } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import Link from 'next/link';
import { IoIosApps } from 'react-icons/io';

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
            icon: FaBookReader
        },
        {
            name: "Materi",
            route: '/admin/lesson',
            icon: FaBook
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
            name : "Lamaran",
            route : "/admin/apply",
            icon : IoIosApps
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
    const pathname = router.pathname
    return (
        <div className='hidden md:block p-4 md:p-8 py-12 border-r border-gray-200 h-screen'>
            <div onClick={() => router.replace("/")} className="flex cursor-pointer items-center justify-between w-full mb-8 gap-x-2">
                <div className="flex-shrink-0">
                    <h1 className="text-black dark:text-black font-semibold text-lg">
                        <AiFillCodeSandboxCircle className={"h-8 w-8 text-blue-500"} />
                    </h1>
                </div>
                <div className="text-md font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Sciencebox</div>
            </div>
            <div className="flex flex-col gap-y-8">
                {
                    sidebars.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link href={item.route} key={index} className={` ${pathname === item.route && "font-bold text-blue-500"} flex items-center justify-start gap-x-8 `}>
                                <Icon className="text-sm" />
                                <div key={index} className={`text-md cursor-pointer hover:text-blue-500 hover:font-bold `}>{item.name}</div>
                            </Link>
                        )
                    })
                }
            </div>
            {/* <div className="flex absolute bottom-20 items-center gap-x-10 cursor-pointer hover:text-blue-500 hover:font-bold justify-between">
                <div className="text-md">Logout</div>
                <FiLogOut />
            </div> */}
        </div>
    )
}

export default Sidebar