import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import { RootState } from '@/store/reducers'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaUserCircle, FaCamera, FaCheckSquare } from 'react-icons/fa'
import { RiLoader2Fill } from "react-icons/ri";
import { useSelector } from 'react-redux'

type Props = {
    children?: React.ReactNode
}


const LayoutProfile = ({ children }: Props) => {
    const user = useSelector((state: RootState) => state.user.user)
    const [tabActive, setTabActive] = useState("Profile Saya")
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [previewImage, setPreviewImage] = useState<string | null>(null)
    const [isLoadingUpload, setIsLoadingUpload] = useState(false)
    const sideItems = [
        {
            name: "Profile Saya",
            route: "/profile"
        },
        {
            name: "Kelas Saya",
            route: "/profile/kelas-saya"
        },
        {
            name: "Invoice Saya",
            route: "/profile/invoice-saya"
        },
        {
            name: "Project Saya",
            route: "/profile/project-saya"
        }
    ]

    const router = useRouter();

    const handleSelectedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            const image = fileList[0];
            setSelectedImage(image);
            const imageUrl = URL.createObjectURL(image)
            setPreviewImage(imageUrl)
        }
    };

    const handleUploadImage = async () => {
        setIsLoadingUpload(true)
        try {
            if (!selectedImage) return;

            const formData = new FormData();

            formData.append("photo", selectedImage)
            const response = await CustomAxios.patch("/user/photo", formData)
            if (response.status === 200) {
                setPreviewImage("")
                window.location.reload();
            }
        } catch (error) {
            console.log({ error });
        }
        setIsLoadingUpload(false)
    }

    const pathname = router.pathname
    return (
        <div className={`bg-white dark:bg-[#333333] min-h-screen`}>
            <Head><title>Profile</title></Head>
            <Navbar />
            <div className="mt-16 p-4 md:px-12 md:flex items-start justify-start gap-x-4 ">
                {/* sidebar */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white dark:bg-[#333333] shadow-lg p-8 flex items-center justify-center flex-col rounded-lg">

                        <div className="relative">
                            <input onChange={handleSelectedImage} className='hidden' id='upload' type="file" accept='.jpg,.jpeg,.png' />
                            <label htmlFor='upload' className="absolute -right-2 bottom-6 cursor-pointer">
                                <FaCamera className="text-blue-300 h-8 w-8" />
                            </label>
                            {
                                previewImage ?
                                    <Image src={previewImage} alt='Profile' height={200} width={200} className='object-cover h-32 w-32 mb-8 rounded-full border-blue-200 border-2' />
                                    :
                                    user.photo ?
                                        <Image priority src={user.photo} alt='Profile' height={200} width={200} className='object-cover h-32 w-32 mb-8 rounded-full border-blue-200 border-2' /> :
                                        <FaUserCircle className="h-32 w-32" />
                            }
                            {
                                isLoadingUpload ? <RiLoader2Fill className="animate-spin text-green-300 h-7 w-7 absolute -right-12 bottom-6 cursor-pointer" /> :
                                    previewImage && <FaCheckSquare onClick={handleUploadImage} className="text-green-300 h-7 w-7 absolute -right-12 bottom-6 cursor-pointer" />
                            }
                        </div>
                        <div className="text-md font-bold">{user.username}</div>
                        <div className="text-md text-blue-500">{user.email}</div>
                    </div>
                    <div className="bg-white dark:bg-[#333333] shadow-lg p-8 gap-4 flex items-start justify-start flex-row md:flex-col rounded-lg mt-8">
                        {
                            sideItems.map((item, index) => (
                                <Link href={item.route} key={index} className={`${pathname === item.route && "text-blue-500"} hover:text-blue-500 text-md font-bold cursor-pointer`}>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full md:w-2/3 overflow-scroll">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutProfile