import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head'
import { FaBell, FaMessage, FaUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

type Props = {
    children : React.ReactNode,
    title : string
}

const Layout = ({
    children,
    title
}: Props) => {
    const auth = [
        {
            name: "notif",
            icon : FaBell
        },
        {
            name: "message",
            icon : FaMessage
        },
        {
            name: "profile",
            icon : FaUser
        },
    ]

    const role = useSelector((state:RootState)=>state.auth.role)
    const router = useRouter()

    useEffect(()=>{
        if(role !== "Admin"){
            router.replace("/")
        }
    }, [])
    return (
        <div className='h-screen overflow-scroll flex items-start justify-start bg-white dark:bg-[#333333]'>
            <Head><title>{title}</title></Head>
            <ToastContainer autoClose={500}/>
            <Sidebar />
            <div className="w-full">
                {/* navbaradmin */}
                <div className="p-4 w-full border-b flex items-center justify-center gap-x-8">
                    <div className="dark:bg-gray-500 w-3/4 border border-gray-200 rounded-lg p-2">
                        <input className='dark:bg-gray-500 outline-none w-full' type="text" placeholder='search . . .' />
                    </div>
                    <div className="flex items-center justify-center gap-x-4">
                        {
                            auth.map((item, index)=>{
                                const Icon = item.icon
                                return (
                                    <div key={index} className="text-2xl text-blue-500">
                                        <Icon/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mt-4 p-4 h-screen overflow-scroll">{children}</div>
            </div>
        </div>
    )
}

export default Layout