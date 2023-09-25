import React, { useState } from 'react'
import { FaL, FaListUl } from "react-icons/fa6";
import Button from '../atoms/Button';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {}

const Navbar = (props: Props) => {
    const navItems = [
        {
            name: "Beranda",
            route: "/"
        },
        {
            name: "Kelas",
            route: "/kelas"
        },
        {
            name: "Artikel",
            route: "/post"
        },
        {
            name: "Galery",
            route: "/galery"
        },
        {
            name: "Tentang",
            route: "/about"
        },
    ]
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const params = useSearchParams()
    const i = params.get("i")
    return (
        <div className="flex overflow-hidden items-center justify-between w-full p-4 md:px-16 md:py-4 shadow-lg">
            <div className="text-lg font-bold w-1/3">Logo</div>
            <div className="w-2/3 hidden md:flex items-center justify-between">
                <div className="md:flex md:flex-row items-center justify-center gap-4 ">
                    {
                        navItems.map((item, index) => (
                            <div onClick={()=>router.push(`${item.route}?i=${index}`)} key={index} className={`text-sm cursor-pointer hover:opacity-50 hover:font-bold ${Number(i) === index && 'font-bold text-blue-500'}`}>{item.name}</div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center gap-4 w-1/2">
                    <Button onClick={()=>{router.push("/login")}} title='Login'/>
                    <Button onClick={()=>{router.push("/register")}} title='Register'/>
                </div>
            </div>
            <FaListUl onClick={()=>{setIsOpen(!isOpen)}} className="md:hidden" />
            <div className={`w-2/3 ${!isOpen && "opacity-0"} md:hidden absolute flex-col top-20 h-[24rem] transition-all ease-linear duration-300 ${isOpen ? "right-0" : "-right-2/3"} bg-white dark:bg-[#333333] shadow-xl gap-y-8 p-4 items-start justify-start`}>
                <div className="flex flex-col items-start justify-start gap-4 ">
                    {
                        navItems.map((item, index) => (
                            <div onClick={()=>router.push(`${item.route}?i=${index}`)} key={index} className={`text-sm cursor-pointer hover:opacity-50 hover:font-bold ${Number(i) === index && 'font-bold text-blue-500'}`}>{item.name}</div>
                        ))
                    }
                </div>
                <div className="flex items-start flex-col justify-start mt-8 gap-4 w-1/2">
                    <Button onClick={()=>{router.push("/login")}} title='Login'/>
                    <Button onClick={()=>{router.push("/register")}} title='Register'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar