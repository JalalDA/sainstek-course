import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import { RootState } from '@/store/reducers'
import Head from 'next/head'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

type Props = {
    children? : React.ReactNode
}

const Profile = (props: Props) => {
    const user = useSelector((state: RootState) => state.user.user)
    const [tabActive, setTabActive] = useState("Kelas")
    const sideItems = [
        {
            name : "Kelas"
        },
        {
            name : "Artikel"
        },
        {
            name : "Invoice"
        },
        {
            name : "Profile"
        }
    ]
    return (
        <div className='bg-white dark:bg-[#333333] min-h-screen'>
            <Head><title>Profile</title></Head>
            <Navbar />
            <div className="mt-16 p-4 md:px-32 ">
                <div className="w-full md:w-1/3">
                    <div className="bg-white dark:bg-[#333333] shadow-lg p-8 flex items-center justify-center flex-col rounded-lg">
                        {
                            user.photo ?
                                <img src={user.photo} alt='Profile User' className='h-32 w-32' /> :
                                <FaUserCircle className="h-32 w-32" />
                        }
                        <div className="text-md font-bold">{user.username}</div>
                        <div className="text-md text-blue-500">{user.email}</div>
                    </div>
                    <div className="bg-white dark:bg-[#333333] shadow-lg p-8 gap-4 flex items-start justify-start flex-row md:flex-col rounded-lg mt-8">
                        {
                            sideItems.map((item, index)=>(
                                <div onClick={()=>setTabActive(item.name)} key={index} className={`${tabActive === item.name && "text-blue-500"} hover:text-blue-500 text-md font-bold cursor-pointer`}>{item.name}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile